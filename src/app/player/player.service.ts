import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {
  private playerIdSubject = new ReplaySubject<number>(1);
  playerId$: Observable<number> = this.playerIdSubject.asObservable();

  next(playerId: number) {
    this.playerIdSubject.next(playerId);
  }
}
