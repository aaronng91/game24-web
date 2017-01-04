import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

import { environment } from '../../environments/environment';

@Injectable()
export class CardService {
  private stompClient: any;

  private cards: number[] = [null, null, null, null];
  private cardsSubject: BehaviorSubject<number[]>;
  cards$: Observable<number[]>;

  constructor() {
    this.cardsSubject = new BehaviorSubject<number[]>(this.cards);
    this.cards$ = this.cardsSubject.asObservable();
    let socket = new SockJS(`${environment.baseUrl}`);
    this.stompClient = Stomp.over(socket);

    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/cards', function (message) {
        that.cardsSubject.next(that.toIntArray(message.body));
      });
    });
  }

  refreshCards() {
    this.stompClient.send('/refresh');
  }

  private toIntArray(str: string) {
    return str.substring(1, str.length - 1).split(',').map(Number);
  }
}
