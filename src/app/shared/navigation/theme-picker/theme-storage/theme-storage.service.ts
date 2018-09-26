import {EventEmitter, Injectable} from '@angular/core';
import {SiteTheme} from '../site-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeStorageService {
  static storageKey = 'app-theme-current-theme';

  constructor() {
  }

  public onThemeUpdate: EventEmitter<SiteTheme> = new EventEmitter<SiteTheme>();

  public storeTheme(theme: SiteTheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = JSON.stringify(theme);
    } catch (e) {
    }

    this.onThemeUpdate.emit(theme);
  }

  public getStoredTheme(): SiteTheme {
    try {
      return JSON.parse(window.localStorage[ThemeStorageService.storageKey] || null);
    } catch (e) {
      return null;
    }
  }

  public clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch (e) {
    }
  }
}
