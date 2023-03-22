import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel, TrackOrder } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: TrackModel[],
    args: TrackOrder = null,
    sort: string | null = null
  ): TrackModel[] {
    try {
      if (args == null) return value;
      else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          } else if (a[args] === b[args]) {
            return 0;
          } else if (a[args] > b[args]) {
            return 1;
          } else return 1;
        });
        return sort === 'asc' ? tmpList : tmpList.reverse();
      }
    } catch (e) {
      console.error(e);
    }
    return value;
  }
}
