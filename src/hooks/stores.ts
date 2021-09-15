import MainStore from './stores/MainStore';
import UIStore from './stores/UIStore';

export const store = {
  mainStore: new MainStore(),
  uiStore: new UIStore(),
};
