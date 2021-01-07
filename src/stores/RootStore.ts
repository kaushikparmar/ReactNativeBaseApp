/**
 * Import all your stores
 */
import {AuthStore} from './AuthStore';
import {UserStore} from './UserStore';


export class RootStore {
  authStore: AuthStore;
  userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore(this);
    this.userStore = new UserStore(this); 
  }
}
 export const RootStoreApp = new RootStore();
