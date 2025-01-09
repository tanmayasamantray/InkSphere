import { Component } from '@angular/core';
import { PostCardComponent } from "../../commonComponent/post-card/post-card.component";
import { CommentFormComponent } from "../../comments/comment-form/comment-form.component";
import { CommentListComponent } from "../../comments/comment-list/comment-list.component";

@Component({
  selector: 'app-single-post',
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

}
