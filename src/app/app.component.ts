import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket/websocket.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private websocketService: WebsocketService) { }

  ngOnInit() {
    this.websocketService.connect(`${environment.baseUrl}`);
  }
}
