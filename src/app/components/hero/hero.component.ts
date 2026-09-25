import { Component, signal, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private readonly catalog = inject(CatalogService);

  readonly scrollY = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrollY.set(window.scrollY);
  }

  get parallaxY(): number {
    return Math.min(this.scrollY() * 0.35, 240);
  }

  get stats() {
    return [
      { value: this.catalog.totalProducts(), suffix: '+', label: 'товаров в каталоге' },
      { value: 12, suffix: '', label: 'лет на рынке КБР' },
      { value: 3, suffix: '', label: 'партнёрских бренда' },
      { value: '5 756', suffix: '', label: 'подписчиков Instagram' }
    ];
  }
}