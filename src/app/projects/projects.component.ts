import { Component, OnInit, } from '@angular/core';
import { ProjectService } from '../project.service';
import {Project} from '../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
