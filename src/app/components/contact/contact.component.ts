import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly phone = '+7 (964) 030-30-39';
  readonly phoneHref = 'tel:+79640303039';
  readonly waHref = 'https://wa.me/79640303039';
  readonly address = 'г. Нальчик, ул. Атажукина, 107';
  readonly hours = 'Ежедневно 9:00 – 19:00';
  readonly profileUrl = 'https://www.instagram.com/prodom.nalchik';

  readonly name = signal('');
  readonly userPhone = signal('');
  readonly message = signal('');
  readonly submitted = signal(false);

  submit(): void {
    const text =
      `Здравствуйте, PRODOM!%0A` +
      `Имя: ${encodeURIComponent(this.name() || '—')}%0A` +
      `Телефон: ${encodeURIComponent(this.userPhone() || '—')}%0A` +
      `Сообщение: ${encodeURIComponent(this.message() || '—')}`;
    window.open(`https://wa.me/79640303039?text=${text}`, '_blank', 'noopener');
    this.submitted.set(true);
  }

  reset(): void {
    this.name.set('');
    this.userPhone.set('');
    this.message.set('');
    this.submitted.set(false);
  }
}
