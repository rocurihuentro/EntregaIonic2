import { Component, OnInit } from '@angular/core';
import { taskInterface } from '../models/task.interface';
import { TodobaseService } from '../services/todobase.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  
  obs: taskInterface = {
    titulo: '',
    precio: 0 ,
    detalle: '',
    plataforma: '',
    foto: '',
    genero: '',
    stock: 0
  };

  obsId = null;

  constructor(
    private actRoute: ActivatedRoute,
    private navControll: NavController,
    private todobaseservice: TodobaseService,
    private loadControll: LoadingController
    ) { }

  ngOnInit() {
    this.obsId = this.actRoute.snapshot.params['id'];
    if (this.obsId){
      this.loadObs();
    }
  }

  async loadObs(){
    const loading = await this.loadControll.create({
      message:'Loading...'
    });
    await loading.present();
    this.todobaseservice.getObs(this.obsId).subscribe(res => {
      loading.dismiss();
      this.obs = res;
    });
  }

  async saveObs(){
    const loading = await this.loadControll.create({
      message:'Saving...'
    });
    await loading.present();

    if(this.obsId){
      // Update
      this.todobaseservice.updateObs(this.obs, this.obsId).then(() => {
        loading.dismiss();
        this.navControll.navigateForward('/admin');
      });
    }else {
      // Add new
      this.todobaseservice.addObs(this.obs).then(() => {
        loading.dismiss();
        this.navControll.navigateForward('/admin');
      });
    }
  }

  removeObs(obsId: string){
    this.todobaseservice.removeObs(obsId);
  }
}
