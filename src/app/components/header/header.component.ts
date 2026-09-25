import { Component, signal, HostListener } from '@angular/core';
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
    { href: '/#configurator', label: 'Конфигуратор', exact: false },
    { href: '/#ar', label: 'AR-примерка', exact: false },
    { href: '/#contacts', label: 'Контакты', exact: false }
  ] as const;

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