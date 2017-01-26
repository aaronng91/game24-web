import { Game24Page } from './app.po';
import { browser } from 'protractor';
import after = testing.after;
import { ProtractorBrowser } from '../node_modules/protractor/built/browser';

describe('game24 App', function() {
  let page: Game24Page;

  beforeEach(() => {
    page = new Game24Page(browser);
    page.navigateTo();
  });

  it('should display set of 4 cards on load', () => {
    page.getCardValues().then(values => {
      expect(values.length).toEqual(4);
    });
  });

  it('should display player ID on load', () => {
    expect(page.getPlayerId()).toMatch(/Player \d+/);
  });

  it('should display a different set of cards on refresh', () => {
    let initialCards: number[];
    page.getCardValues().then(values => initialCards = values);

    page.refresh();

    page.getCardValues().then(values => {
      expect(values).not.toEqual(initialCards);
    });
  });

  describe('Between two sessions', () => {
    let browser2: ProtractorBrowser;
    let page2: Game24Page;

    beforeEach(() => {
      browser2 = browser.forkNewDriverInstance(true);
      page2 = new Game24Page(browser2);
      page2.navigateTo();
    });

    it('should have the same set of cards', () => {
      expect(page.getCardValues()).toEqual(page2.getCardValues());
    });

    it('should have different player IDs', () => {
      expect(page.getPlayerId()).not.toEqual(page2.getPlayerId());
    });

    it('should have the same set of cards after one session refreshes', () => {
      page2.refresh();

      expect(page.getCardValues()).toEqual(page2.getCardValues());
    });

    afterEach(() => {
      browser2.quit();
    });
  });
});
