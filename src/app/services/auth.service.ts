import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { userInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authfirebase: AngularFireAuth) { }

  login(emailUser: string, passwordUser: string){
    return this.authfirebase.signInWithEmailAndPassword(emailUser, passwordUser)
  }
  logout(){
    this.authfirebase.signOut();
  }

  registerUser(user: userInterface){
    return this.authfirebase.createUserWithEmailAndPassword(user.emailUser,user.passwordUser);
  }

  stateUser(){
    return this.authfirebase.authState
  }

  async getUid(){
    const user = await this.authfirebase.currentUser;
    if (user){
      return user.uid;
    }
    else{
      return null;
    }
  }
}
