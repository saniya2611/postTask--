import { Component, Input, OnInit } from '@angular/core';
import { Iposts1 } from '../../model/posts1';

@Component({
  selector: 'app-posts1',
  templateUrl: './posts1.component.html',
  styleUrls: ['./posts1.component.scss']
})
export class Posts1Component implements OnInit {
  @Input() postsInfo1 !:Iposts1
  constructor() { }

  ngOnInit(): void {
  }

}
