import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userInterface } from './models/user.interface';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  login:boolean = false;
  tipoUser: 'cliente' | 'admin' = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private firestore: FirestoreService
  ) {

    this.auth.stateUser().subscribe(res => {
      if(res) {
        console.log('esta logeado');
        this.login = true;
        this.getDatosUser(res.uid)
      }
      else{
        console.log('no esta loegado');
        this.login = false;
      }
    })
  }

  logout(){
    this.auth.logout();
    // this.auth.interaction.presentToast('session finalizada');
    this.router.navigate(['/home'])
  }

  irAdmin(){
    this.router.navigate(['/admin'])
  }

  irPerfil(){
    this.router.navigate(['/perfil'])
  }

  irHome(){
    this.router.navigate(['/home'])
  }

  getDatosUser(uid: string){
    const path = "ionusuario";
    const id = uid;
    this.firestore.getDoc<userInterface>(path, id).subscribe( res =>{
      console.log('datos ->', res)
      if(res){
        this.tipoUser = res.typeUser;
      }
    })
  }
}
