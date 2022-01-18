import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/users/user.model';
import { UserService } from './user.service';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User | null>;
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService,
  ) {
    this.user = afAuth.authState;
  }

  async signin(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(user: UserModel) {
    const { email, password } = user;
    const createUser = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const currentUser: any = await this.afAuth.currentUser;
    const { uid } = await currentUser;
    user.id = uid;
    await this.userService.createOrUpdate(user, uid);

    return createUser;
  }

  authUser(): Observable<any> {
    return this.user;
  }
  
  get currentUser() {
    let userAuth = new BehaviorSubject<any>(null);
    this.authUser().subscribe((user) => {
      userAuth.next(user);
    });
    return userAuth;
  }

  signout() {
    return this.afAuth.signOut();
  }

}
