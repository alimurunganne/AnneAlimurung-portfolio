import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggle],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {
  projects = [
    {
      title: 'Garage Cafe',
      description: 'Garage Café is a website that highlights a local café, featuring quality drinks, light meals, and a welcoming space for the community to relax and gather.',
      image: 'assets/Frame-1.png',
      link: 'https://visitgaragecafe.com/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB Atlas']
    },
    {
      title: 'Barangay Information System',
      description: 'A web-based platform that streamlines barangay services — residents can register, request documents, and access community updates while administrators manage records efficiently.',
      image: 'assets/Frame-2.png',
      link: 'https://github.com/cassandraarcilla/6WCSERVER-Final-Project.git',
      tags: ['Vue', 'Node.js', 'MongoDB Atlas']
    },
    {
      title: 'Memoir Of Art',
      description: 'Memoir of Art is a WordPress website designed to explore and share insights, ideas, and inspirations about art and creativity.',
      image: 'assets/Frame-3.png',
      link: 'https://memoirofart.wordpress.com/',
      tags: ['WordPress', 'UI/UX']
    }
  ];
      // Add this property and method to each component class
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}