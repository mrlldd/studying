import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../types";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post!: Post;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()
  removePost() {
    this.onDelete.emit(this.post.id)
  }

  constructor() { }

  ngOnInit() {
  }


}
