import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-vertodo',
  templateUrl: './vertodo.page.html',
  styleUrls: ['./vertodo.page.scss'],
})
export class VertodoPage implements OnInit {

  games: any[];

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient
  ) { }

  getGames(){
    return this.http
    .get("assets/files/listGames.json")
    .pipe(
      map((res:any) =>{
        return res.data;
      })
    )
  }

  ngOnInit(){
    this.getGames().subscribe(res => {
      console.log("Res", res)
      this.games = res;
    });
  }

}
