import { Album } from 'src/app/models/album.model';


export interface AlbumsState {
  albums: Album[];
}

export const initialState: AlbumsState = {
  albums: []
}