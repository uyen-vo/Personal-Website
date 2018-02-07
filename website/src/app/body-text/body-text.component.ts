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
  }

}
