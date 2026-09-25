import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-brands-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands-strip.component.html',
  styleUrl: './brands-strip.component.scss'
})
export class BrandsStripComponent {
  private readonly catalog = inject(CatalogService);
  readonly brands = this.catalog.brands;
}