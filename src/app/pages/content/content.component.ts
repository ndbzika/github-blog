import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'src/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  image = '';
  title = 'Content';
  description = 'This is the content page.';
  link = '';
  private id = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.setValuesToComponent(params['id']);
    });
  }

  setValuesToComponent(id: string) {
    const article = data.filter((item) => item.id === Number(id))[0];
    this.id = article.id.toString();
    this.image = article.image;
    this.title = article.title;
    this.description = article.description;
    this.link = article.link;
  }
}
