import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import {Project} from '../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentProjects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.recentProjects = this.projectService.getProjects().slice(0, 2); // Zeigt nur die neuesten 2 Projekte an
  }
}

