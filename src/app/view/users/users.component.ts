import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/users/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import firebase from 'firebase/app'
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public user$: Promise<firebase.User>
  public userForm: UserModel = {
    id: '',
    name: '',
    password: '',
    email: ''
  }
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private store: Store<firebase.User>
  ) { }

  ngOnInit(): void {
    this.userService.get('xfXrN4wmima7h7wI6In0').subscribe(user=>{
      console.log(user)
    })
  }
  signup(){
    this.authService.signup(this.userForm).then(resp=>{
      const user = resp.user as firebase.User
      this.store.dispatch(login({ user }))
    })
  }
}
