import { makeAutoObservable } from 'mobx';
import { SiderTheme } from 'antd/lib/layout/Sider';
import { THEME_CONFIG } from 'common/enums';

import Utils from 'utils';

class MainStore {
  public currentTheme: SiderTheme;
  public sideNavTheme: SiderTheme;

  constructor() {
    makeAutoObservable(this);
    this.currentTheme = THEME_CONFIG.currentTheme;
    this.sideNavTheme = THEME_CONFIG.sideNavTheme;
  }

  public setCurrentTheme = (theme: SiderTheme): void => {
    this.currentTheme = theme;
    Utils.setLocalStorage('currentTheme', theme);
  };

  public getCurrentTheme = () => {
    let theme = Utils.getLocalStorage('currentTheme');
    if (theme) {
      this.currentTheme = theme;
      return theme;
    }

    Utils.setLocalStorage('currentTheme', THEME_CONFIG.currentTheme);
    return this.currentTheme;
  };

  public setSideNavTheme = (sideNavTheme: SiderTheme): void => {
    this.sideNavTheme = sideNavTheme;
    Utils.setLocalStorage('sideNavTheme', sideNavTheme);
  };

  public getSideNavTheme = () => {
    let sideNavTheme = Utils.getLocalStorage('sideNavTheme');
    if (sideNavTheme) {
      this.sideNavTheme = sideNavTheme;
      return sideNavTheme;
    }

    Utils.setLocalStorage('sideNavTheme', THEME_CONFIG.sideNavTheme);
    return this.sideNavTheme;
  };
}

export default MainStore;
