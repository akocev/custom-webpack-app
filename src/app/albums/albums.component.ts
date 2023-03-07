import {Component} from "@angular/core";
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { StoreFacadeService } from '../store/store-facade.service';

@Component 
({
  selector: "vs-albums",
  styleUrls: ["./albums.component.scss"],
  templateUrl: "./albums.component.html",
})
export class AlbumsComponent {

  albums: Observable<Album[]> = [] as any;
  constructor(private storeFacade: StoreFacadeService) {}

  ngOnInit(): void {
    this.albums = this.storeFacade.dashboard.loadAlbums$;
  }
}