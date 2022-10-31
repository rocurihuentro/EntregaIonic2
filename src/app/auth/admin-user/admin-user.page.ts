import { Component, OnInit } from '@angular/core';
import { userInterface } from 'src/app/models/user.interface';
import { UserbaseService } from 'src/app/services/userbase.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.page.html',
  styleUrls: ['./admin-user.page.scss'],
})
export class AdminUserPage implements OnInit {

  ionusuario: userInterface[];

  constructor(private userbaseservice: UserbaseService) { }

  ngOnInit(){
    this. userbaseservice.getIonusuario().subscribe(res => this.ionusuario = res);
  }

}