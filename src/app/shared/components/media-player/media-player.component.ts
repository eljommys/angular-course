import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  // listObservers$: Array<Subscription> = [];
  // state: string = 'paused';
  mockCover: TrackModel = {
    name: 'name',
    album: 'album name',
    cover: 'cover',
    url: 'url',
    _id: 'id',
  };

  ngOnInit(): void {
    // const observer1$ = this.multimediaService.playerStatus$.subscribe(
    //   (status) => (this.state = status)
    // );
    // this.listObservers$ = [observer1$];
  }
}
