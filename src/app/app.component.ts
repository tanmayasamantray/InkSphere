import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './commonComponent/header/header.component';
import { CategoryNavbarComponent } from "./commonComponent/category-navbar/category-navbar.component";
import { FooterComponent } from "./commonComponent/footer/footer.component";
import { PostCardComponent } from "./commonComponent/post-card/post-card.component";
import { SubscriptionFormComponent } from "./subscription-form/subscription-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CategoryNavbarComponent, FooterComponent, SubscriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InkSphere';
}
