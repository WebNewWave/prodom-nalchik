import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TileSwatch {
  readonly name: string;
  readonly css: string;
}

@Component({
  selector: 'app-ar-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ar-preview.component.html',
  styleUrl: './ar-preview.component.scss'
})
export class ArPreviewComponent {
  // Плитки-образцы для наложения на «пол» в режиме предпросмотра
  readonly swatches: TileSwatch[] = [
    { name: 'Мрамор беж', css: 'repeating-linear-gradient(45deg, #E8E2D5 0, #E8E2D5 8px, #D4CCB8 8px, #D4CCB8 16px)' },
    { name: 'Бетон серый', css: 'repeating-linear-gradient(0deg, #B5B0A6 0, #B5B0A6 12px, #8A857C 12px, #8A857C 24px)' },
    { name: 'Террацо', css: 'radial-gradient(circle at 30% 30%, #C76B3A 0%, #E8E2D5 30%, #2C2823 60%)' },
    { name: 'Сланец чёрный', css: 'repeating-linear-gradient(90deg, #1A1818 0, #1A1818 20px, #2C2823 20px, #2C2823 40px)' },
    { name: 'Песок', css: 'repeating-linear-gradient(45deg, #D4CCB8 0, #D4CCB8 4px, #B5A88A 4px, #B5A88A 8px)' },
    { name: 'Травертин', css: 'repeating-linear-gradient(0deg, #D9C8A8 0, #D9C8A8 16px, #B5A88A 16px, #B5A88A 32px)' }
  ];

  readonly selected = signal(0);
  readonly arState = signal<'idle' | 'checking' | 'unsupported' | 'supported'>('idle');
  readonly arMessage = signal<string>(
    'Наложите плитку на пол в режиме предпросмотра или запустите AR, если ваш телефон поддерживает WebXR.'
  );

  selectTile(index: number): void {
    this.selected.set(index);
  }

  getFloorStyle(): { [key: string]: string } {
    return { 'background': this.swatches[this.selected()].css };
  }

  async launchAr(): Promise<void> {
    const xr = (navigator as unknown as { xr?: { isSessionSupported?: (m: string) => Promise<boolean> } }).xr;
    if (!xr?.isSessionSupported) {
      this.arState.set('unsupported');
      this.arMessage.set('AR недоступен в этом браузере. Показываем предпросмотр плитки на полу — этого достаточно, чтобы оценить фактуру и тон.');
      return;
    }
    this.arState.set('checking');
    try {
      const ok = await xr.isSessionSupported('immersive-ar');
      if (ok) {
        this.arState.set('supported');
        this.arMessage.set('Ваш телефон поддерживает AR. В полной версии здесь откроется камера и плитка «ляжет» прямо на ваш пол.');
      } else {
        this.arState.set('unsupported');
        this.arMessage.set('AR-режим не активирован производителем устройства. Используйте предпросмотр — он передаёт цвет и рисунок плитки.');
      }
    } catch {
      this.arState.set('unsupported');
      this.arMessage.set('Не удалось проверить AR. Откройте предпросмотр, чтобы увидеть плитку на полу.');
    }
  }
}
