import {Component} from "@angular/core";
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Image } from '../models/image.model';
import { StoreFacadeService } from '../store/store-facade.service';

@Component
({
  selector: "vs-dashboard",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {

  images: Observable<Image[]> = [] as any;
  albums: Observable<Album[]> = [] as any;

  constructor(private storeFacade: StoreFacadeService) {}

  ngOnInit(): void {
    this.storeFacade.dashboard.getImages();
    this.albums = this.storeFacade.dashboard.loadAlbums$;
    this.images = this.storeFacade.dashboard.loadImages$;
  }

  addToAlbum(image: Image) {
    let album = {title: 'Album 1 '} as Album;
    this.storeFacade.dashboard.addImageToAlbum(album, image);
  }

}