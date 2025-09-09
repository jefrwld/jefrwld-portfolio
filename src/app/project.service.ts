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
      github: 'https://github.com/jefrwld/study-buddy-frontend/',
      technologies: ['Symfony', 'Angular', 'Docker', 'PHP', 'TypeScript', 'LLM']
    },
    {
      title: 'Swipedia',
      description: 'Swipedia is a personalized knowledge discovery app that lets you swipe through Wikipedia articles, learning what you love by what you like.',
      image: 'swipedia.png',
      github: 'https://github.com/jefrwld/swipedia',
      technologies: ['Angular', 'TypeScript']
    },


      {
      title: 'vibe-clip',
      description: 'A small CLI tool I developed while learning the basics of Rust. It observes the system clipboard and sanitizes critical & configured information so that sharing your code with strg v with an ai is no worry',
      image: 'vibeclip.png',
      github: 'https://github.com/jefrwld/vibe-clip',
      technologies: ['Rust']
    }
  ]

  getProjects() {
    return this.projects;
  }
}
