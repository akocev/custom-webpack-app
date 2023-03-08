import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsComponent } from './albums.component';

const routes: Routes = [
    { path: '', component: AlbumsComponent},
    {
      path: 'dashboard/album/:id',
      component: AlbumDetailsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AlbumsRoutingModule { }