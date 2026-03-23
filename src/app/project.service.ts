import { Injectable } from '@angular/core';
import {Project} from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
  {
    title: 'rupomo',
    description: 'A terminal-based Pomodoro timer built in Rust. Create topics, configure work/break durations, track sessions with SQLite, and get desktop notifications — all from the CLI. Built as a Rust learning project.',
    image: 'rupomo.png',
    github: 'https://github.com/jefrwld/rupomo',
    technologies: ['Rust', 'TUI', 'SQLite']
  },
  {
    title: 'vibe-clip',
    description: 'A lightweight CLI tool built in Rust that monitors your system clipboard and automatically sanitizes sensitive information before sharing. Perfect for safely copying code snippets to AI assistants without worrying about accidentally exposing API keys, passwords, or other confidential data.',
    image: 'vibeclip.png',
    github: 'https://github.com/jefrwld/vibe-clip',
    technologies: ['Rust', 'CLI']
  }
  ]

  getProjects() {
    return this.projects;
  }
}
