import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlbumDetailsComponent } from '../albums/album-details/album-details.component';
import { AlbumsComponent } from '../albums/albums.component';
import { DashboardService } from '../services/dashboard.service';
import { appReducer } from '../store/app.state';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
      DashboardComponent,
      AlbumsComponent,
      AlbumDetailsComponent
    ],
    imports: [
      CommonModule,
      DashboardRoutingModule
    ],
    providers: [DashboardService],
    exports: []
  })
  export class DashboardModule { }