import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { userInterface } from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserbaseService {
  private fireCollection: AngularFirestoreCollection <userInterface>;
  private ionusuario: Observable <userInterface[]>;

  constructor(dbFire : AngularFirestore) {
    this.fireCollection = dbFire.collection<userInterface>('ionusuario');
    this.ionusuario = this.fireCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }
  
  getIonusuario(){
    return this.ionusuario;
  }

  getUser(id: string){
    return this.fireCollection.doc<userInterface>(id).valueChanges();
  }

  updateUser(user: userInterface, id: string){
    return this.fireCollection.doc(id).update(user);
  }

  addUser(user: userInterface){
    return this.fireCollection.add(user);
  }

  removeUser(id: string){
    return this.fireCollection.doc(id).delete();
  }

}
