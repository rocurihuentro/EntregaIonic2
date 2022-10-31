import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-pc',
  templateUrl: './pc.page.html',
  styleUrls: ['./pc.page.scss'],
})
export class PcPage implements OnInit {

  juegos: [];

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient
  ) { }

  ngOnInit(){
  }


  activarfiltros(){

  }

}

