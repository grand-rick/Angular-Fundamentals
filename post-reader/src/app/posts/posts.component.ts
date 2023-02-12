import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = 'Posts';
  posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["votes"] = 0;
      }

      this.posts = res;
    });
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);

    alert('Post added!');
  }
}
