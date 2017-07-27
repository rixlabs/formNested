import { FormNestedPage } from './app.po';

describe('form-nested App', function() {
  let page: FormNestedPage;

  beforeEach(() => {
    page = new FormNestedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
