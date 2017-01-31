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
    return this.element(by.css('#player-id')).getText();
  }

  refresh() {
    return this.element(by.buttonText('Restart')).click();
  }

  getGotItButton() {
    return this.element(by.buttonText('Got It!'));
  }

  gotIt() {
    return this.getGotItButton().click();
  }

  getPlayerWon() {
    return this.element(by.css('#player-won')).getText();
  }
}
