import { Component, OnInit } from '@angular/core';

import { CardService } from '../card/card.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  verify: boolean;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.verify = false;
  }

  gotIt() {
    this.verify = true;
  }

  correct() {
    this.cardService.refreshCards();
    this.verify = false;
  }

  wrong() {
    this.cardService.refreshCards();
    this.verify = false;
  }
}
