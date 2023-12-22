import { Component, OnInit } from '@angular/core';
import { data } from '../../../data/data';
import { IData } from 'src/interfaces/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly data = data;
  principalData = this.filterData(1)[0];
  secondaryData: IData[] = this.filterDifferentData(1);

  constructor() {}

  ngOnInit(): void {
    console.log(this.secondaryData);
  }

  filterData(id: number) {
    return this.data.filter((item) => item.id === id);
  }

  filterDifferentData(id: number) {
    return this.data.filter((item) => item.id !== id);
  }
}
