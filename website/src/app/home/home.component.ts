import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string;
  tools: string;
  body: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Welcome.';
    this.tools = 'texas a&m 2018 // programmer // designer';
    // tslint:disable-next-line:max-line-length
    this.body = 'Welcome to my website! Junior at Texas A&M pursuing my B.S. in Computer Science and minor in Art. Also an aspiring watercolor artist and graphic designer. Check me out!';
  }

}
