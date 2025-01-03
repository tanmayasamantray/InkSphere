import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  brandpath = "https://drive.google.com/file/d/1EU_guDdjLVs2hJ4ZIOA0tsmr-osc9Q8k/view?usp=sharing"  
}
