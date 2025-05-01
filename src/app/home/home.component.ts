import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recentProjects = ['Study Budy', 'Swipedia']; 

}
