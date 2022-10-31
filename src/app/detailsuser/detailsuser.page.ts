import { Component, OnInit } from '@angular/core';
import { userInterface } from '../models/user.interface';
import { UserbaseService } from '../services/userbase.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detailsuser',
  templateUrl: './detailsuser.page.html',
  styleUrls: ['./detailsuser.page.scss'],
})
export class DetailsuserPage implements OnInit {
  
  user: userInterface = {

    nombreUser: null,
    apellidoUser:  null,
    edadUser: null,
    emailUser:  null,
    passwordUser:  null,
    idUser:  null,
    typeUser: 'admin'
  };
  userId = null;

  constructor(
    private actRoute: ActivatedRoute,
    private navControll: NavController,
    private userbaseservice: UserbaseService,
    private loadControll: LoadingController
    ) { }

  ngOnInit() {
    this.userId = this.actRoute.snapshot.params['id'];
    if (this.userId){
      this.loadUser();
    }
  }

  async loadUser(){
    const loading = await this.loadControll.create({
      message:'Loading...'
    });
    await loading.present();
    this.userbaseservice.getUser(this.userId).subscribe(res => {
      loading.dismiss();
      this.user = res;
    });
  }

  async saveUser(){
    const loading = await this.loadControll.create({
      message:'Saving...'
    });
    await loading.present();

    if(this.userId){
      // Update
      this.userbaseservice.updateUser(this.user, this.userId).then(() => {
        loading.dismiss();
        this.navControll.navigateForward('/admin-user');
      });
    }else {
      // Add new
      this.userbaseservice.addUser(this.user).then(() => {
        loading.dismiss();
        this.navControll.navigateForward('/admin-user');
      });
    }
  }

  removeUser(userId: string){
    this.userbaseservice.removeUser(userId);
  }
}

