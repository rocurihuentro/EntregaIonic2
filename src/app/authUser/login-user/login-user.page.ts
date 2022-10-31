import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {

  credenciales = {
    emailUser: null,
    passwordUser: null

  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private interactionService: InteractionService) { }

  ngOnInit() {
  }

  async onLogin(){
    this.interactionService.presentLoading('Ingresando...')
    console.log('creenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.emailUser, this.credenciales.passwordUser).catch( error => {
      console.log('error');
      this.interactionService.CloseLoading();
      this.interactionService.presentToast('Usuario o contraseña invalido')
    })
    if (res){
      console.log('res',res);
      this.interactionService.CloseLoading();
      this.interactionService.presentToast('Ingresado con exito');
      this.router.navigate(['/home'])
    }
  }

}
