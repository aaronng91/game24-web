import { Component } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent {
  constructor(private websocketService: WebsocketService) {}

  refresh() {
    this.websocketService.send('/refresh');
  }
}
