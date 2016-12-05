import { Component } from '@angular/core';

import { CardService } from '../card/card.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent {
  constructor(private cardService: CardService) {}

  refresh() {
    this.cardService.refreshCards();
  }
}
