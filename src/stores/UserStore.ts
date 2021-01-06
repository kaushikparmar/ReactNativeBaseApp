import {observable, action} from 'mobx';
import {v4 as uuidv4} from 'uuid';
import {RootStoreModel} from './RootStore';

export interface IUserStore {
  id: string;
  name?: string;
  pic?: string;
}

export class UserStore implements IUserStore {
  private rootStore: RootStoreModel;

  @observable id = uuidv4();
  @observable name = '';
  @observable pic = '';

  constructor(rootStore?: RootStoreModel) {
    this.rootStore = rootStore;
  }

  @action getName = (name: string): void => {
    if (rootStore.authStore.id) {
      this.name = name;
    }
  }
}