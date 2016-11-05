import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

describe('App: Game24', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    let element: DebugElement;

    // Need to async as component requires loading of external html & css before component can be created
    // https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-external-template
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CardComponent
            ],
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            // Access the dependency injected component instance
            app = fixture.componentInstance;
            // Access the element
            element = fixture.debugElement;
        });
    }));

    it('should have 4 cards', () => {
        expect(element.queryAll(By.css('app-card')).length).toEqual(4);
    });
});
