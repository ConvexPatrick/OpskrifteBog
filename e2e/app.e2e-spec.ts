import { OpskrifteBogPage } from './app.po';

describe('opskrifte-bog App', () => {
  let page: OpskrifteBogPage;

  beforeEach(() => {
    page = new OpskrifteBogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
