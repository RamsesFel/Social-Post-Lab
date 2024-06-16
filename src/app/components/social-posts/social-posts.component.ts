import { Component } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent,PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  allposts:Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool."
    },
    {
      title: "Ritual",
      thought: "Ritual is a well developed app."
    },
    {
      title: "Scott",
      thought: "Scott rides scooters."
    }
  ];

  onSumbit(p:Post){
    this.allposts.push(p);
  }

  onDelete(post:Post){
    let index:number= this.allposts.findIndex(p=> p == post);
    this.allposts.splice(index,1);
  }
}
