import { Ng4CliNodePage } from './app.po';

describe('ng4-cli-node App', () => {
  let page: Ng4CliNodePage;

  beforeEach(() => {
    page = new Ng4CliNodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
