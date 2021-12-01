import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../types";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post | undefined = undefined;
  constructor() { }

  ngOnInit() {
  }


}
