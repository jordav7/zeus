import { ZeusPage } from './app.po';

describe('zeus App', () => {
  let page: ZeusPage;

  beforeEach(() => {
    page = new ZeusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
