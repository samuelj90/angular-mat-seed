import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/auth/login');
  }

  getComponent(name) {
    return element(by.css(name));
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  loginWithCredentials(credentias: { username: string, password: string }) {
    const userNameInput = element(by.id('username'));
    browser.wait(ExpectedConditions.presenceOf(userNameInput), 10000);
    userNameInput.sendKeys(credentias.username);
    const passwordInput = element(by.id('password'));
    passwordInput.sendKeys(credentias.password);
    const loginSubmitButton = element(by.css('button[type=submit]'));
    loginSubmitButton.click();
  }

}
