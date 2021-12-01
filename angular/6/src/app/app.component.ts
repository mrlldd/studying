import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, map} from "rxjs/operators";

export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  posts: Todo[] = [];
  namePost = '';
  flagLoad = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }


  addPost() {
    if (!this.namePost.trim()) {
      return
    }
    const post: Todo = {
      title: this.namePost,
      completed: false
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos/', post)
      .subscribe(res => {
        console.log(res)
        this.posts.unshift(post)
      });

  }

  loadPosts(): void {
    this.flagLoad = true;
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=15')
      .pipe(map(x => {
        const copy = [...x];
        copy.sort((prev, next) => prev.title > next.title ? 1 : -1);
        return copy;
      }))
      .subscribe(response => {
        console.log(response)
        this.posts = response;
        this.flagLoad = false;
      });
  }

  removePost(id: number | undefined): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        console.log(id)
        this.posts = this.posts.filter(item => item.id != id)
        console.log(this.posts)
      });
  }

  completePost(id: number | undefined) {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
      .subscribe((res) => {
        const found = this.posts.find(item => item.id === res.id);
        if(!found) {
          return;
        }
        found.completed = true;
      })
  }

}
