import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-configurator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configurator.component.html',
  styleUrl: './configurator.component.scss'
})
export class ConfiguratorComponent {
  private readonly catalog = inject(CatalogService);

  readonly steps = this.catalog.configuratorChoices;
  readonly selection = this.catalog.selection;

  readonly currentStep = computed(() => {
    const s = this.selection();
    const i = this.steps().findIndex(step => step.categoryId === 'floor');
    if (i >= 0) return { index: 0, label: 'Пол', value: this.steps()[i].tiles[s.floor], accent: this.steps()[i].accent };
    return null;
  });

  selectTile(stepId: 'floor' | 'wall' | 'sanitary' | 'accessory', index: number): void {
    this.catalog.selectTile(stepId, index);
  }

  getFloorStyle(): { [key: string]: string } {
    const sel = this.selection();
    const patterns = [
      'repeating-linear-gradient(45deg, #E8E2D5 0, #E8E2D5 8px, #D4CCB8 8px, #D4CCB8 16px)',
      'repeating-linear-gradient(0deg, #B5B0A6 0, #B5B0A6 12px, #8A857C 12px, #8A857C 24px)',
      'radial-gradient(circle at 30% 30%, #C76B3A 0%, #E8E2D5 30%, #2C2823 60%)',
      'repeating-linear-gradient(90deg, #1A1818 0, #1A1818 20px, #2C2823 20px, #2C2823 40px)',
      'repeating-linear-gradient(45deg, #D4CCB8 0, #D4CCB8 4px, #B5A88A 4px, #B5A88A 8px)',
      'repeating-linear-gradient(0deg, #D9C8A8 0, #D9C8A8 16px, #B5A88A 16px, #B5A88A 32px)'
    ];
    return { 'background': patterns[sel.floor] || patterns[0] };
  }

  getWallStyle(): { [key: string]: string } {
    const sel = this.selection();
    const patterns = [
      'linear-gradient(180deg, #FFFFFF 0%, #F0EDE5 100%)',
      'repeating-linear-gradient(0deg, #C8C0B0 0, #C8C0B0 6px, #A8A090 6px, #A8A090 12px)',
      'radial-gradient(circle, #6B7050 4px, transparent 5px) 0 0 / 16px 16px',
      'linear-gradient(180deg, #FAFAF7 0%, #FAFAF7 50%, transparent 50%) 0 0 / 24px 48px',
      'linear-gradient(180deg, #D9D2C5 0%, #B5A88A 100%)',
      'linear-gradient(180deg, #6B7050 0%, #4A5840 100%)'
    ];
    return { 'background': patterns[sel.wall] || patterns[0] };
  }

  getSanitaryName(): string {
    const sel = this.selection();
    return this.steps()[2].tiles[sel.sanitary];
  }

  getAccessoryName(): string {
    const sel = this.selection();
    return this.steps()[3].tiles[sel.accessory];
  }
}