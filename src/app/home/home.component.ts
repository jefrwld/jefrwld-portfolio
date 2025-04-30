import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recentProjects = ['Study Budy', 'Swipedia']; 

}
