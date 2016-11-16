import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapComponent } from './tap.component';
import { CardService } from '../card/card.service';

describe('TapComponent', () => {
  let component: TapComponent;
  let fixture: ComponentFixture<TapComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapComponent ],
      providers: [ CardService ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TapComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement;
      fixture.detectChanges();
    });
  }));
});
