import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { userInterface } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: userInterface = {

    nombreUser: null,
    apellidoUser:  null,
    edadUser: null,
    emailUser:  null,
    passwordUser:  null,
    idUser:  null,
    typeUser: 'admin'
  };

  constructor(
    private auth: AuthService,
    private firestore : FirestoreService,
    private router: Router,
    private interactionService: InteractionService) { }

  ngOnInit() {
  }

  async onRegister(){
    this.interactionService.presentLoading('registrando...')
    console.log('datos ->', this.user)
    const res = await this.auth.registerUser(this.user).catch( error =>{
      this.interactionService.CloseLoading();
      this.interactionService.presentToast('error')
      console.log('error');
    })
    if(res){
      console.log('exito al crear usuario');
      const path = 'ionusuario';
      const id = res.user.uid;
      this.user.id = id;
      this.user.passwordUser = null
      await this.firestore.createDoc(this.user, path, id)
      
      this.router.navigate(['/admin'])
    }
  }

  onback(){
    this.router.navigate(['/admin'])
  }

}