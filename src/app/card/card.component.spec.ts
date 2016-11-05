import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CardComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement;
      fixture.detectChanges();
    });
  }));

  it('should contain a valid card value on init', () => {
    let possibleShownValues: String[] = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    expect(component.value >= 1 && component.value <= 13).toBeTruthy();
    expect(possibleShownValues).toContain(component.shownValue);
  });
});
