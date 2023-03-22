import { ArtistModel } from './artist.model';

export type TrackOrder = 'name' | 'album' | null;

export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  url: string;
  _id: string | number;
  artist?: ArtistModel;
}
