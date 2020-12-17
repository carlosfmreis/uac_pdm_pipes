import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datesList: Date[];

  constructor() {}

  ngOnInit(): void {
    this.datesList = [];
    this.datesList.push(new Date(2020, 11, 1));
    this.datesList.push(new Date(2020, 5, 1));
    this.datesList.push(new Date(2020, 8, 1));
  }
}
