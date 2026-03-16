// src/app/services/theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  isDark = false;

  constructor(factory: RendererFactory2) {
    this.renderer = factory.createRenderer(null, null);
    // Load saved preference — default is light
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.enableDark();
    } else {
      this.enableLight(); // explicitly set light on init so data-theme is always defined
    }
  }

  toggle(): void {
    this.isDark ? this.enableLight() : this.enableDark();
  }

  private enableDark(): void {
    this.isDark = true;
    this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  private enableLight(): void {
    this.isDark = false;
    this.renderer.setAttribute(document.documentElement, 'data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}