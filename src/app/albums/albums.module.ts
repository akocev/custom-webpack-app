import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums.component';
import { DashboardService } from '../services/dashboard.service';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
    declarations: [
      AlbumsComponent,
      AlbumDetailsComponent
    ],
    imports: [
      CommonModule,
      AlbumsRoutingModule
    ],
    providers: [DashboardService],
    exports: []
  })
  export class AlbumsModule { }