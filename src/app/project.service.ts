import { Injectable } from '@angular/core';
import {Project} from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private projects: Project[] = [
    {
      title: 'Study Budy',
      description: 'Application which generates markdown content and a quiz game out of images of written notes by using LLM / OpenAI API',
      image: 'study.jpg',
      github: '',
      technologies: ['Symfony', 'Angular', 'Docker', 'PHP', 'TypeScript', 'LLM']
    },
    {
      title: 'E-Commerce Shop',
      description: 'A modern e-commerce shop with a shopping cart and user authentication.',
      image: 'shop.jpg',
      github: '',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  getProjects() {
    return this.projects;
  }
}
