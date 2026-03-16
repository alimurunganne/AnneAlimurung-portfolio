import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit, OnDestroy {

  ngAfterViewInit(): void {
    this.initTypewriter();
    this.initCounters();
    this.initScrollButton();
    this.initScrollAnimations();
    this.initSkillBars();
  }

  ngOnDestroy(): void {}

  // ── Typewriter ──────────────────────────────────────────
  private initTypewriter(): void {
    const el = document.getElementById('typewriter-el');
    if (!el) return;
    const roles = ['Front-End Developer', 'UI/UX Enthusiast', 'Angular Developer', 'Clean Code Advocate'];
    let rIdx = 0, cIdx = 0, deleting = false;
    const tick = () => {
      const word = roles[rIdx];
      if (!deleting) {
        el.textContent = word.slice(0, ++cIdx);
        if (cIdx === word.length) { deleting = true; setTimeout(tick, 1800); return; }
        setTimeout(tick, 80);
      } else {
        el.textContent = word.slice(0, --cIdx);
        if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; setTimeout(tick, 400); return; }
        setTimeout(tick, 45);
      }
    };
    setTimeout(tick, 600);
  }

  // ── Counting stats ──────────────────────────────────────
  private initCounters(): void {
    const els = document.querySelectorAll<HTMLElement>('.stat-number[data-target]');
    if (!els.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset['target'] ?? '0', 10);
        const STEPS = 80, INTERVAL = 16;
        let count = 0;
        const timer = setInterval(() => {
          count++;
          const eased = 1 - Math.pow(1 - count / STEPS, 3);
          el.textContent = String(Math.round(eased * target));
          if (count >= STEPS) { el.textContent = String(target); clearInterval(timer); }
        }, INTERVAL);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });
    els.forEach(el => observer.observe(el));
  }

  // ── Scroll button ───────────────────────────────────────
  private initScrollButton(): void {
    const btn = document.getElementById('scroll-btn');
    const target = document.getElementById('what-i-do');
    if (!btn || !target) return;
    btn.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ── Scroll animations (.sa elements) ───────────────────
  private initScrollAnimations(): void {
    const els = document.querySelectorAll<HTMLElement>('.sa');
    if (!els.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => observer.observe(el));
  }

  // ── Skill bars ──────────────────────────────────────────
  private initSkillBars(): void {
    const fills = document.querySelectorAll<HTMLElement>('.skill-fill');
    if (!fills.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    fills.forEach(el => observer.observe(el));
  }
}