import { makeAutoObservable } from 'mobx';

class UIStore {
  public sharedLoading: boolean;

  constructor() {
    makeAutoObservable(this);
    this.sharedLoading = false;
  }

  public setSharedLoading = (isLoading: boolean): void => {
    this.sharedLoading = isLoading;
  };
}

export default UIStore;
