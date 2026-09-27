import { Component, effect, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  readonly navItems = [
    { href: '/', label: 'Главная', exact: true },
    { href: '/#catalog', label: 'Каталог', exact: false },
    { href: '/#brands', label: 'Бренды', exact: false },
    { href: '/#contacts', label: 'Контакты', exact: false }
  ] as const;

  constructor() {
    // Блокируем прокрутку фона, пока открыто мобильное меню.
    effect(() => {
      const open = this.isMenuOpen();
      document.documentElement.classList.toggle('menu-open', open);
      document.body.classList.toggle('menu-open', open);
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}