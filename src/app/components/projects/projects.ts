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
      link: 'https://visitgaragecafe.com/'
    },
    {
      title: 'Barangay Information System',
      description: 'The Barangay Information System is a web-based platform that streamlines barangay services by allowing residents to register, request documents, and access community updates online, while administrators efficiently manage records and information.',
      image: 'assets/Frame-2.png',
      link: 'https://github.com/cassandraarcilla/6WCSERVER-Final-Project.git'
    },
    {
      title: 'Memoir Of Art',
      description: 'Memoir of Art is a WordPress website designed to explore and share insights, ideas, and inspirations about art and creativity.',
      image: 'assets/Frame-3.png',
      link: 'https://memoirofart.wordpress.com/'
    }
  ];
}