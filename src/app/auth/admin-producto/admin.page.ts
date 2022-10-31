import { Component, OnInit } from '@angular/core';
import { taskInterface } from 'src/app/models/task.interface';
import { TodobaseService } from 'src/app/services/todobase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  observable: taskInterface[];

  constructor(private todobaseservice: TodobaseService) { }

  ngOnInit(){
    this.todobaseservice.getObservable().subscribe(res => this.observable = res);
  }

}
