import { Image } from '../../models/image.model';

export interface DashboardState {
  images: Image []
}

export const initialState: DashboardState = {
  images: []
}