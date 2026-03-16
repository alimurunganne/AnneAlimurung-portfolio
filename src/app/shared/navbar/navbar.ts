import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeToggle } from '../../components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ThemeToggle],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  /** The routerLink of the currently active page, e.g. '/home' */
  @Input() activePage: string = '';

  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
}