import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly phoneHref = 'tel:+79640303039';
  readonly phone = '+7 (964) 030-30-39';
  readonly profileUrl = 'https://www.instagram.com/prodom.nalchik';
  readonly year = new Date().getFullYear();

  readonly nav = [
    { href: '/#catalog', label: 'Каталог' },
    { href: '/#brands', label: 'Бренды' },
    { href: '/#contacts', label: 'Контакты' }
  ];
}
