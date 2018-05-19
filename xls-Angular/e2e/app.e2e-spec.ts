import { XlsAngularPage } from './app.po';

describe('xls-angular App', function() {
  let page: XlsAngularPage;

  beforeEach(() => {
    page = new XlsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
