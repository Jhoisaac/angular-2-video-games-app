import { CrudVideoGamesAppPage } from './app.po';

describe('crud-video-games-app App', () => {
  let page: CrudVideoGamesAppPage;

  beforeEach(() => {
    page = new CrudVideoGamesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
