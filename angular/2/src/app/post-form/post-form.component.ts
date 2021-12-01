import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../types";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';
  styleToggle = false;
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>();
  @ViewChild('inputText', {static: false})
  inputText!: ElementRef;
  @ViewChild('inputTitle', {static: false})
  inputTitle!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.addPostUser.emit(post);
      this.text = '';
      this.title = '';
    }
  }

  onLoadDefault(): void {
    this.styleToggle = !this.styleToggle;
    if (this.styleToggle) {
      this.inputText.nativeElement.style.color = "red"
      this.inputTitle.nativeElement.style.fontWeight = "bold"
      return;
    }
    this.inputText.nativeElement.style.color = 'black'
    this.inputTitle.nativeElement.style.fontWeight = "normal"
  }
}
