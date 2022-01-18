import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseInterface } from '../interface/firebase.interface';

import { UserModel } from '../models/users/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends FirebaseInterface<any> {
  constructor(firestore: AngularFirestore) {
    super(UserModel, firestore, 'users');
  }
}
