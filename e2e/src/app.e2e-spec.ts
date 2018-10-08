import { AppPage } from './app.po';

describe('Angular Material Seed', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home component', () => {
    page.navigateTo();
    expect(page.getComponent('home')).toBeDefined();
  });

  it('should display login if user is not logged in', () => {
    page.navigateTo();
    expect(page.getComponent('login')).toBeDefined();
  });

  it('should display dashboard if user is logged in', () => {
    page.navigateToLogin();
    page.loginWithCredentials({username: 'admin', password: 'admin@123'});
    expect(page.getCurrentUrl()).toContain('dashboard');
  });

  it('should display login if wrong user tries logged in', () => {
    page.navigateToLogin();
    page.loginWithCredentials({username: 'wrongadmin', password: 'wrongadmin@123'});
    expect(page.getCurrentUrl()).toContain('login');
  });
});
