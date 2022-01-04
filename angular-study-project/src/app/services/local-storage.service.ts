import { Injectable } from "@angular/core";

import { INewUser } from "../auth/auth.interfaces";
import { constants } from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class SessionStorage {

  storage: Storage;

  constructor() {
    this.storage = sessionStorage;
  }

  getStorageUser() {
    const storageUser = sessionStorage.getItem(constants.STUDY_PROJECT_STORAGE_VAR);
    return storageUser;
  }

  setStorageUser(storageUser: INewUser): void {
    const userString = JSON.stringify(storageUser);
    this.storage.setItem(constants.STUDY_PROJECT_STORAGE_VAR, userString);
  }

  deleteStorageUser() {
    this.storage.removeItem(constants.STUDY_PROJECT_STORAGE_VAR);
  }
}