import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  value: Number;
  shownValue: String;

  constructor() { }

  ngOnInit() {
    this.value = this.getRandomInt(1, 13);
    this.shownValue = this.convertToShownValue(this.value);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  convertToShownValue(value: Number) {
    if (value === 1) {
      return 'A';
    } else if (value === 11) {
      return 'J';
    } else if (value === 12) {
      return 'Q';
    } else if (value === 13) {
      return 'K';
    } else {
      return value.toString();
    }
  }
}
