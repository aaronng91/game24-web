import { Game24Page } from './app.po';

describe('game24 App', function() {
  let page: Game24Page;

  beforeEach(() => {
    page = new Game24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
