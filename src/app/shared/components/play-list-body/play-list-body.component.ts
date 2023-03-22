import { Component, Input, OnInit } from '@angular/core';
import { TrackOrder, TrackModel } from '@core/models/tracks.model';

import * as dataRaw from '@data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = [];
  optionSort: { property: TrackOrder; order: string } = {
    property: null,
    order: 'asc',
  };

  ngOnInit() {
    const { data }: any = (dataRaw as any).default;
    this.tracks = data;
  }

  changeSort(property: TrackOrder): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
    console.log(this.optionSort);
  }
}
