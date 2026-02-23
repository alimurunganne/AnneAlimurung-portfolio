import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ThemeToggle],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
      // Add this property and method to each component class
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}