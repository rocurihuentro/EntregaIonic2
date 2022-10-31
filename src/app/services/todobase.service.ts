import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { taskInterface } from "../models/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TodobaseService {
  private fireCollection: AngularFirestoreCollection <taskInterface>;
  private observable: Observable <taskInterface[]>;

  constructor(dbFire : AngularFirestore) {
    this.fireCollection = dbFire.collection<taskInterface>('observable');
    this.observable = this.fireCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map( a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }
  
  getObservable(){
    return this.observable;
  }

  getObs(id: string){
    return this.fireCollection.doc<taskInterface>(id).valueChanges();
  }

  updateObs(obs: taskInterface, id: string){
    return this.fireCollection.doc(id).update(obs);
  }

  addObs(obs: taskInterface){
    return this.fireCollection.add(obs);
  }

  removeObs(id: string){
    return this.fireCollection.doc(id).delete();
  }

}
