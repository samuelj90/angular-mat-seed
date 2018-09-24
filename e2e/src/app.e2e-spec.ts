import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home component', () => {
    page.navigateTo();
    expect(page.getComponent('home')).toBeDefined();
  });
});
