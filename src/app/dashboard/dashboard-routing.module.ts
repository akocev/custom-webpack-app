import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from '../albums/album-details/album-details.component';
import { AlbumsComponent } from '../albums/albums.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'albums', component: AlbumsComponent},
    {
      path: 'album/:id',
      component: AlbumDetailsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }