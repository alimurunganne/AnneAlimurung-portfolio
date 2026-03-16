import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {

  activeAccordion: number | null = null;
  currentCertificate = 0;
  profilePhoto = 'assets/profile.jpg';

  certificates = [
    { title: 'Legacy Responsive Web Design V8 (August 2024)',                      image: 'assets/responsive_web_fcc.png' },
    { title: 'Legacy JavaScript Algorithms and Data Structures V7 (October 2025)', image: 'assets/js_legacy_fcc.png'      },
    { title: 'Back End Development and APIs V8 (October 2025)',                    image: 'assets/backend_api_fcc.png'    },
    { title: 'Content Marketing Certified (August 2025)',                          image: 'assets/content marketing certified.png'    },
    { title: 'Design Thinking for Beginners (July 2025)',                          image: 'assets/design thinking for beginners.png'    },
    { title: 'Digital Advertising Certified (October 2025)',                       image: 'assets/digital ads cert.png'    },
    { title: 'Digital Marketing Certified (July 2025)',                            image: 'assets/digital marketing cert.png'    },
    { title: 'Hubspot SEO II (February 2025)',                                     image: 'assets/hubspot seo 2.png'    },
    { title: 'Introduction to Graphic Design; Basic of UI/UX (August 2025)',       image: 'assets/intro to graphic design.png'    },
    { title: 'Introduction to PHP (February 2025)',                                image: 'assets/intro to php.png'    },
    { title: 'SEO Certified (October 2025)',                                       image: 'assets/seo certified.png'    },
    { title: 'Website UI/UX Designing using ChatGPT (August 2025)',                image: 'assets/web ui_ux using chatgpt.png'    },
    { title: 'AWS Academy Cloud Foundation (March 2026)',                          image: 'assets/AWS cloud foundation.png'    },
    { name: 'Google Analytics Certified',                                          image: 'assets/google analytics.png' }
  ];

  badges = [
    { name: 'Python Essentials 1',            image: 'assets/python-badge-1.png'        },
    { name: 'JavaScript Essentials 1',        image: 'assets/js_essentials_1.png'       },
    { name: 'CCNA Introduction to Networks',  image: 'assets/CCNA_ITN_1.png'            },
    { name: 'JavaScript & Node.js Explorer',  image: 'assets/level_1_badge-js_node.png' },
    { name: 'AWS Academy Cloud Foundation',   image: 'assets/aws-academy-graduate-cloud-foundations-training-bad.png' },
    { name: 'Google Analytics Certified',     image: 'assets/badge 6.png' }
  ];

  toggleAccordion(index: number): void {
    this.activeAccordion = this.activeAccordion === index ? null : index;
  }

  nextCertificate(): void {
    this.currentCertificate = (this.currentCertificate + 1) % this.certificates.length;
  }

  prevCertificate(): void {
    this.currentCertificate =
      this.currentCertificate === 0 ? this.certificates.length - 1 : this.currentCertificate - 1;
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

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
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }
}