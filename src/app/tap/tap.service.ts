import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs/Subject';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class TapService {
  private firstPlayerToTapSubject = new Subject<number>();
  firstPlayerToTap$: Observable<number> = this.firstPlayerToTapSubject.asObservable();

  next(playerId: number) {
    this.firstPlayerToTapSubject.next(playerId);
  }
}
