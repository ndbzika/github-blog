import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/interfaces/Data';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent implements OnInit {
  id: number = 0;
  pic: string = '';
  title: string = '';
  description: string = '';
  link: string = '';
  @Input()
  data: IData = {
    id: 0,
    title: '',
    description: '',
    image: '',
    link: '',
  };

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.pic = this.data.image;
    this.title = this.data.title;
    this.description = this.data.description;
    this.link = this.data.link;
    this.id = this.data.id;
    console.log(this.data);
  }
}
