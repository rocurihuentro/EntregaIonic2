import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { taskInterface } from '../models/task.interface';
import { TodobaseService } from '../services/todobase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data : any;

  observable: taskInterface[];

  games: any [];

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private todobaseservice: TodobaseService) {

    // this.route.queryParams.subscribe(params => {
    //   if (params && params.data) {
    //     this.data = JSON.parse(params.data);
    //   }

    // });
  }

  // JSON
  // getGames(){
  //   return this.http
  //   .get("assets/files/listGames.json")
  //   .pipe(
  //     map((res:any) =>{
  //       return res.data;
  //     })
  //   )
  // }

  ngOnInit(){
    // JSON
    // this.getGames().subscribe(res => {
    //   console.log("Res", res)
    //   this.games = res;
    // });

    this.todobaseservice.getObservable().subscribe(res => this.observable = res);
  }
}
