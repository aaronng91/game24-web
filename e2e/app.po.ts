import { by } from 'protractor';
import { ProtractorBrowser } from '../node_modules/protractor/built/browser';

export class Game24Page {
  private browser;
  private element;

  constructor(browser: ProtractorBrowser) {
    this.browser = browser;
    this.element = browser.element;
  }

  navigateTo() {
    return this.browser.get('/');
  }

  getCardValues() {
    return this.element.all(by.css('.card')).map(card => card.getText());
  }

  getPlayerId() {
    return this.element(by.css('.playerId')).getText();
  }

  refresh() {
    return this.element(by.buttonText('Refresh')).click();
  }
}
