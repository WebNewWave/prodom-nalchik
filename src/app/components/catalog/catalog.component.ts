import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  private readonly catalog = inject(CatalogService);
  readonly categories = this.catalog.categories;
}
