import { Component, OnInit } from '@angular/core';
import { StoreFacadeService } from '../../store/store-facade.service';
import { Observable } from 'rxjs';
import { Album } from '../../models/album.model';

@Component({
  selector: 'vs-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album: Observable<Album | undefined> = [] as any;

  constructor(private storeFacade: StoreFacadeService) {}

  ngOnInit(): void {
    this.album = this.storeFacade.dashboard.getSelectedAlbum$;
  }
}
