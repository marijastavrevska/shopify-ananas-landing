import { Component, HostListener } from '@angular/core';
import { PAGE_CONTENT } from './content';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly c = PAGE_CONTENT;
  readonly currentYear = new Date().getFullYear();
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showBackToTop = typeof window !== 'undefined' && window.scrollY > 300;
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
