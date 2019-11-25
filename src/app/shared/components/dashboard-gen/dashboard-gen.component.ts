declare var require: any;
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as Highcharts from 'highcharts';

import StockModule from 'highcharts/modules/stock';
import MapModule from 'highcharts/modules/map';
import GanttModule from 'highcharts/modules/gantt';
import ExportingModule from 'highcharts/modules/exporting';
import SunsetTheme from 'highcharts/themes/sunset.src.js';
StockModule(Highcharts);
MapModule(Highcharts);
GanttModule(Highcharts);
ExportingModule(Highcharts);
SunsetTheme(Highcharts);
@Component({
  selector: 'app-dashboard-gen',
  templateUrl: './dashboard-gen.component.html',
  styleUrls: ['./dashboard-gen.component.scss']
})
export class DashboardGenComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts.SeriesColumnOptions;

  chartOptions1: Highcharts.Options = {
    chart: {
      type: 'spline',
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {

          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = (new Date()).getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        }
      }
    },

    time: {
      useUTC: false
    },

    title: {
      text: 'Live random data'
    },
    xAxis: {
      type: 'datetime',
      tickPixelInterval: 150
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'Random data',
      data: (function () {
        // generate an array of random data
        var data = [],
          time = (new Date()).getTime(),
          i;

        for (i = -19; i <= 0; i += 1) {
          data.push({
            x: time + i * 1000,
            y: Math.random()
          });
        }
        return data;
      }())
    }]
  }
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'scatter',
      margin: [70, 50, 60, 80],
      events: {
        click: function (e) {
          // find the clicked values and the series
          var x = Math.round(e.xAxis[0].value),
            y = Math.round(e.yAxis[0].value),
            series = this.series[0];

          // Add it
          series.addPoint([x, y]);

        }
      }
    },
    title: {
      text: 'User supplied data'
    },
    subtitle: {
      text: 'Click the plot area to add a point. Click a point to remove it.'
    },
    xAxis: {
      gridLineWidth: 1,
      minPadding: 0.2,
      maxPadding: 0.2,
      maxZoom: 60
    },
    yAxis: {
      title: {
        text: 'Value'
      },
      minPadding: 0.2,
      maxPadding: 0.2,
      maxZoom: 60,
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        point: {
          events: {
            click: function () {
              if (this.series.data.length > 1) {
                this.remove();
              }
            }
          }
        }
      }
    },
    series: [{
      data: [[20, 20], [80, 80]]
    }]
  }
  chartOptions4: Highcharts.Options = {
    title: { text: "Highcharts chart" },
    series: [{
      type: 'line',
      data: [11, 2, 3],
      zones: [{
        value: 7.2,
        dashStyle: "dot",
        color: "red"
      }]
    }, {
      type: 'line',
      data: [5, 6, 7]
    }]
  }
  chartOptions3: Highcharts.Options = {
    title: { text: 'Sample Chart with two Data' },
    subtitle: { text: 'This chart has two data init, Line chart and OHLC chart' },
    series: [{
      type: 'line',
      data: [4, 3, -12],
      threshold: -10
    }, {
      type: 'ohlc',
      data: [
        [0, 15, -6, 7],
        [7, 12, -1, 3],
        [3, 10, -3, 3]
      ]
    }]
  }
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Mob Sample 1', cols: 1, rows: 1, chart: this.chartOptions1 },
          { title: 'Mob Sample 2', cols: 1, rows: 1, chart: this.chartOptions2 },
          { title: 'Mob Sample 3', cols: 1, rows: 1, chart: this.chartOptions3 },
          { title: 'Mob Sample 3', cols: 1, rows: 1, chart: this.chartOptions4 },
        ];
      }

      return [
        { title: 'Sample 1', cols: 1, rows: 1, chart: this.chartOptions1 },
        { title: 'Sample 2', cols: 1, rows: 1, chart: this.chartOptions2 },
        { title: 'Sample 3', cols: 1, rows: 1, chart: this.chartOptions3 },
        { title: 'Sample 3', cols: 1, rows: 1, chart: this.chartOptions4 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

  }

}
