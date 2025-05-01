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
      title: 'Swipedia',
      description: 'Swipedia is a personalized knowledge discovery app that lets you swipe through Wikipedia articles, learning what you love by what you like.',
      image: 'swipedia.png',
      github: 'https://github.com/jefrwld/swipedia',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  getProjects() {
    return this.projects;
  }
}
