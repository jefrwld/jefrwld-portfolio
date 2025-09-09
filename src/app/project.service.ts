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
    description: 'A lightweight CLI tool built in Rust that monitors your system clipboard and automatically sanitizes sensitive information before sharing. Perfect for safely copying code snippets to AI assistants without worrying about accidentally exposing API keys, passwords, or other confidential data.',
    image: 'vibe-clip.png', // Fixed: should match the project name
    github: 'https://github.com/jefrwld/vibe-clip', // Fixed: should match the project name
    technologies: ['Rust', 'CLI'] // Fixed: should reflect the actual technologies used
  }
  ]

  getProjects() {
    return this.projects;
  }
}
