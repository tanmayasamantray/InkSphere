import { Component } from '@angular/core';
import { PostCardComponent } from "../../commonComponent/post-card/post-card.component";

@Component({
  selector: 'app-home',
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
