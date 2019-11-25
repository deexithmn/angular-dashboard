declare var require: any;
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import * as Highcharts from 'highcharts';

import StockModule from 'highcharts/modules/stock';
import MapModule from 'highcharts/modules/map';
import GanttModule from 'highcharts/modules/gantt';
import ExportingModule from 'highcharts/modules/exporting';
StockModule(Highcharts);
MapModule(Highcharts);
GanttModule(Highcharts);
ExportingModule(Highcharts);
@Component({
  selector: 'app-dashboard-gen',
  templateUrl: './dashboard-gen.component.html',
  styleUrls: ['./dashboard-gen.component.scss']
})
export class DashboardGenComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Highcharts.Options;
  chartOptions2: Highcharts.Options;
  chartOptions3: Highcharts.Options;
  chartOptions4: Highcharts.Options;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Mob Sample 1', cols: 2, rows: 1, chart: this.chartOptions1 },
          { title: 'Mob Sample 2', cols: 2, rows: 1, chart: this.chartOptions2 },
          { title: 'Mob Sample 3', cols: 2, rows: 1, chart: this.chartOptions3 },
          { title: 'Mob Sample 3', cols: 2, rows: 1, chart: this.chartOptions4 },
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
    this.chartOptions1 = {
      title: {
        text: 'Sample Chart'
      },
      subtitle: {
        text: 'Sample Subtitle'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [{
        type: 'line',
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        type: 'line',
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        type: 'line',
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        type: 'line',
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        type: 'line',
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    }
    this.chartOptions2 = {
      chart: {
        type: 'column'
      },

      title: {
        text: 'Highcharts responsive chart'
      },

      subtitle: {
        text: 'Resize the frame or click buttons to change appearance'
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },

      xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas'],
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Amount'
        }
      },

      series: [{
        type: 'column',
        name: 'Christmas Eve',
        data: [1, 4, 3]
      }, {
        type: 'column',
        name: 'Christmas Day before dinner',
        data: [6, 4, 2]
      }, {
        type: 'column',
        name: 'Christmas Day after dinner',
        data: [8, 4, 3]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    }
    this.chartOptions3 = {
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
    this.chartOptions4 = {
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
  }

}
