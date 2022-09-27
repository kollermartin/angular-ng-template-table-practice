import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public readonly users = [{name: 'karel', surname: 'kokos'}, {name: 'Mahulena', surname: 'Pohulena'}];

  public readonly items = [{name: 'domestos', price: 45, shop: 'Lidl'}, {name: 'hajzlPapir', price: 20, shop: 'Penny'}];

  constructor() { }

  ngOnInit(): void {
    console.log(this.users);
  }

}
