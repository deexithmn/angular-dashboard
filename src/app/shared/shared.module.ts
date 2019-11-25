import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardGenComponent } from './components/dashboard-gen/dashboard-gen.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    MainNavComponent,
    DashboardGenComponent,
    // HighchartsChartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    HighchartsChartModule
  ],
  exports: [
    MainNavComponent,
    DashboardGenComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
