import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recentProjects = ['rupomo', 'vibe-clip'];

  technologies = ['PHP', 'TypeScript', 'Rust', 'Nix', 'Angular', 'Symfony', 'Docker', 'GIT', 'VIM', 'MariaDB', 'Keycloak', 'Gitlab'];

  interests = ['computers', 'sports', 'music', 'art', 'writing', 'philosophy', 'new technologies'];

  get techRows(): string[][] {
    const rows: string[][] = [];
    for (let i = 0; i < this.technologies.length; i += 4) {
      rows.push(this.technologies.slice(i, i + 4));
    }
    return rows;
  }

  get interestRows(): string[][] {
    const rows: string[][] = [];
    for (let i = 0; i < this.interests.length; i += 3) {
      rows.push(this.interests.slice(i, i + 3));
    }
    return rows;
  }

}
