import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {


  url: string = 'http://google.com';
  cursoAngular: boolean = true;
  urlImg: string = 'https://images.pexels.com/photos/2404673/pexels-photo-2404673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  getValor() {
    return 1;
  }

  getCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
