import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailUser:any;
  passwordUser:any;

  constructor(
    private router: Router,
    private fireauth: AngularFireAuth) { }

  ngOnInit() {
  }

  onLog(){

    this.emailUser = ((document.getElementById("email") as HTMLInputElement).value);
    this.passwordUser = ((document.getElementById("password") as HTMLInputElement).value);

    
    this.fireauth.signInWithEmailAndPassword(this.emailUser, this.passwordUser)
    .then(userCredential => {
      if (userCredential.user) {
        // window.alert("logged in");
        this.router.navigate(['/admin']);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    
    
    });

  }

  onRedReset(){
    this.router.navigateByUrl('/reset')
  }

}
