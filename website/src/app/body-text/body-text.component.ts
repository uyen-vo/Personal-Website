import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body-text',
  templateUrl: './body-text.component.html',
  styleUrls: ['./body-text.component.scss']
})
export class BodyTextComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() tools: string;
  @Input() body: string;

  ngOnInit() {
    this.setSize();
  }

  setSize() {
    const w = ((window.innerHeight + 2) / 2) + 200;
    (<HTMLElement>document.getElementById('body-text-wrapper')).style.marginLeft = w + 'px';
  }

  onResize(event) {
    if (window.innerHeight >= 700) {
      this.setSize();
    }
  }

}
