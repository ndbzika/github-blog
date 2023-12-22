import { Component, Input, OnInit } from '@angular/core';
import { IData } from 'src/interfaces/Data';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  id: number = 0;
  @Input()
  image: string = '';
  @Input()
  title: string = '';
  @Input()
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
    // console.log(this.data);
    // this.id = this.data.id;
    // this.image = this.data.image;
    // this.title = this.data.title;
  }

  ngOnInit(): void {}
}
