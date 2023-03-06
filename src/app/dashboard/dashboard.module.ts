import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
      DashboardComponent,
      AlbumsComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule
    ],
    exports: []
  })
  export class DashboardModule { }