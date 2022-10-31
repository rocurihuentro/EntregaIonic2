import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  emailUser: any;

  constructor(
    private fireauth: AngularFireAuth, 
    private router: Router,
    private interactionService: InteractionService) { }

  ngOnInit() {
  }

  onReset(){
    this.emailUser=((document.getElementById("email")as HTMLInputElement).value);
    
    this.fireauth.sendPasswordResetEmail(this.emailUser)
    .then(userCredential => {
        window.alert("Se enviado un correo a tu cuenta para recuperar tu contraseña :" + this.emailUser);
        this.interactionService.presentToast('Ingresado con exito');
        this.router.navigateByUrl('/login');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert(errorMessage);
    });
  }

}
