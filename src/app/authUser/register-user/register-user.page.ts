import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { userInterface } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  user: userInterface = {

    nombreUser: null,
    apellidoUser:  null,
    edadUser: null,
    emailUser:  null,
    passwordUser:  null,
    idUser:  null,
    typeUser: 'cliente'
  };

  constructor(
    private auth: AuthService,
    private firestore : FirestoreService,
    private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    // this.interaction.presentLoading('registrando...')
    console.log('datos ->', this.user)
    const res = await this.auth.registerUser(this.user).catch( error =>{
      // this.interaction.closeLoading();
      // this.interaction.presentToast('error')
      console.log('error');
    })
    if(res){
      console.log('exito al crear usuario');
      const path = 'ionusuario';
      const id = res.user.uid;
      this.user.id = id;
      this.user.passwordUser = null
      await this.firestore.createDoc(this.user, path, id)
      // this.interaction.presentToast('registrado con exito')
      this.router.navigate(['/home'])
    }
  }

  onback(){
    this.router.navigate(['/login-user'])
  }

}
