import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Alana's First Post",
      thought: "Let's see if this thing works!",
    },
    {
      title: "Alana's Second Post",
      thought: 'It works, but does it REALLY work?',
    },
    {
      title: 'Unicorns',
      thought: 'They are real.',
    },
    {
      title: 'Elevators',
      thought: 'Going Up!',
    },
  ];
  visible: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };
  addPost = (post: Post) => {
    this.posts.unshift(post);
    this.visible = false;
  };
  toggleModal = (): void => {
    this.visible = true;
  };
}
