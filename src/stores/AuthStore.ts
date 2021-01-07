import {observable, action, makeAutoObservable} from 'mobx';
import {v4 as uuidv4} from 'uuid';
import { RootStore} from './RootStore';
import { getRoot } from "mobx-easy";
export interface IAuthStore {
  id: string;
  name?: string;
  pic?: string;
}


export class AuthStore implements IAuthStore{

  id = uuidv4();
  name = '';
  pic = '';
  private rootStore : RootStore


  constructor(rootStore : RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore
    
  }
  setName = (name: string): void => {
        if (this.rootStore.authStore.id) {
          this.name = name;
        }
      }
      getName = ()  => {
        if (this.rootStore.authStore.id) {
          return this.id
        }
      }
  
}
