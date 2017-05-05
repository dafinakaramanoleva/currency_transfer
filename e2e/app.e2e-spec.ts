import { CurrencyTransferPage } from './app.po';

describe('currency-transfer App', () => {
  let page: CurrencyTransferPage;

  beforeEach(() => {
    page = new CurrencyTransferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
