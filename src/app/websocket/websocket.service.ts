import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { CardService } from '../card/card.service';
import { PlayerService } from '../player/player.service';
import { TapService } from '../tap/tap.service';

@Injectable()
export class WebsocketService {
  private socket: any;
  private stompClient: any;

  constructor(private cardService: CardService,
              private tapService: TapService,
              private playerService: PlayerService) { }

  connect(address: string) {
    this.socket = new SockJS(address);
    this.stompClient = Stomp.over(this.socket);

    let that = this;
    this.stompClient.connect({}, function () {
      that.stompClient.subscribe('/topic/cards', function (message) {
        that.cardService.next(message.body);
      });

      that.stompClient.subscribe('/topic/playerId', function (message) {
        that.playerService.next(message.body);
      });

      that.stompClient.subscribe('/topic/gotIt', function (message) {
        that.tapService.next(message.body);
      });
    });
  }

  send(path: string) {
    this.stompClient.send(path);
  }
}
