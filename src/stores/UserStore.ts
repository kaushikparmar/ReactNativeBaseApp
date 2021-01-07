import {observable, action, makeAutoObservable} from 'mobx';
import {v4 as uuidv4} from 'uuid';
import {RootStore} from './RootStore';

export interface IUserStore {
  id: string;
  name?: string;
  pic?: string;
}
export class UserStore implements IUserStore {

  id = uuidv4();
  name = '';
  pic = '';
  private rootStore : RootStore


  constructor(rootStore : RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore
    
  }
  getName = (name: string): void => {
        if (this.rootStore.authStore.id) {
          this.name = name;
        }
      }
  
}
