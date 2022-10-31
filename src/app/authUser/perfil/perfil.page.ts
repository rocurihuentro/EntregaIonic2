import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { userInterface } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  uid: string = null;

  infoUser: userInterface = null;

  constructor(
    private authService: AuthService,
    private firestoreservice: FirestoreService,
    private alertController: AlertController,
    private interactionService: InteractionService){ }

  async ngOnInit() {
    console.log('Estoy en mi perfil');
    this.authService.stateUser().subscribe(res => {
      console.log('en perfil -> estado de autenticacion -> ', res);
      this.getUid();
    });
    this.getUid();
  }

  async getUid(){
    const uid = await this.authService.getUid();
    if(uid){
      this.uid = uid;
      console.log('uid ->', this.uid);
      this.getInfoUser();
    }
    else{
      console.log('no exite uid');
    }
  }

  getInfoUser(){
    const path = 'ionusuario';
    const id = this.uid;
    this.firestoreservice.getDoc<userInterface>(path, id).subscribe(res => {
      if (res){
        this.infoUser = res;
      }
      console.log('datos son ->', res);
    })
  }

  async editAtributo(objName: string){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:'Editar' + objName,
      inputs: [
        {
          name: objName,
          type:'text',
          placeholder:'Ingresa tu '+ objName
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text:'Aceptar',
          handler: (ev) => {
            console.log('Confirm Ok', ev);
            this.saveAtributo(objName , ev[objName])
          }
        }
      ]
    });
    await alert.present();
  }

  async saveAtributo(objName: string ,input: any){
    await this.interactionService.presentLoading('actualizando...')
    const path = 'ionusuario';
    const id = this.uid;
    const updateDoc = {
    };
    updateDoc[objName] = input;
    this.firestoreservice.updateDoc(path, id, updateDoc).then( () => {
      this.interactionService.presentToast('actualizado con exito')
      this.interactionService.CloseLoading();
    })
  }

}
