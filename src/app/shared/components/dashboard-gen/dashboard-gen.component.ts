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
// import * as Highcharts from 'highcharts';
import * as HC_customEvents from 'highcharts-custom-events';
HC_customEvents(Highcharts);

// Alternative way of a plugin loading:
//const HC_ce = require('highcharts-custom-events');
//HC_ce(Highcharts);

StockModule(Highcharts);
MapModule(Highcharts);
GanttModule(Highcharts);
ExportingModule(Highcharts);

// Legacy way of map loading - see file at the path for more info.
//require('../../js/worldmap')(Highcharts);

SunsetTheme(Highcharts);
@Component({
  selector: 'app-dashboard-gen',
  templateUrl: './dashboard-gen.component.html',
  styleUrls: ['./dashboard-gen.component.scss']
})
export class DashboardGenComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   title: { text: 'Title Guru' },
  //   subtitle: { text: '2nd data set' },
  //   series: [{
  //     type: 'line',
  //     data: [4, 3, -12],
  //     threshold: -10
  //   }, {
  //     type: 'ohlc',
  //     data: [
  //       [0, 15, -6, 7],
  //       [7, 12, -1, 3],
  //       [3, 10, -3, 3]
  //     ]
  //   }]
  // }
  chartOptions: Highcharts.Options = {
    "title": { "text": "Highcharts chart" },
    "series": [{
      type: 'line',
      "data": [11, 2, 3],
      "zones": [{
        "value": 7.2,
        "dashStyle": "dot",
        "color": "red"
      }]
    }, {
      "data": [5, 6, 7]
    }]
  }

  // @Input() stockDashBoard: StockChart;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 2 },
          { title: 'Card 2', cols: 1, rows: 2 },
          { title: 'Card 3', cols: 1, rows: 2 },
          { title: 'Card 4', cols: 1, rows: 2 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 },
        { title: 'Card 2', cols: 1, rows: 2 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // this.card3Data = stockDashBoard
    // console.log(this.stockDashBoard);
  }

}
