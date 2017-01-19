import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WebsocketService } from './websocket/websocket.service';
import { environment } from '../environments/environment';

describe('App: Game24', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let mockService: WebsocketService;

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj('Fake WebsocketService', ['connect']);

    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [
        { provide: WebsocketService, useValue: mockService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should connect to websocket service on init', () => {
    component.ngOnInit();

    expect(mockService.connect).toHaveBeenCalledWith(`${environment.baseUrl}`);
  });
});
