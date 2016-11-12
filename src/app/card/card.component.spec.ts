import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Card } from '../models/card.model';
import { CardComponent } from './card.component';
import { CardService } from './card.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    // Creating mock cardService
    let cards: Array<Card> = new Array(
      new Card(1, 'A'),
      new Card(2, '2'),
      new Card(3, '3'),
      new Card(4, '4'));
    let mockService: any = {
      'cards$': (new BehaviorSubject(cards)).asObservable()
    };

    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [{ provide: CardService, useValue: mockService }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should have 4 cards on init', () => {
    expect(component.cards$.subscribe(cards => {
      expect(cards.length).toEqual(4);
    }));
  });
});
