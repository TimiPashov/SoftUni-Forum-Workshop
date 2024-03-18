import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {
  private httpSubscribtion = {} as Subscription;
  posts: Post[] = [];

  constructor(private api: ApiService) { }


  ngOnInit(): void {
    this.httpSubscribtion = this.api.getPosts(5).subscribe(posts => {
      this.posts = posts;

    })
  }

  ngOnDestroy() { 
    if (this.httpSubscribtion) {
      this.httpSubscribtion.unsubscribe();
    }
  }
}
