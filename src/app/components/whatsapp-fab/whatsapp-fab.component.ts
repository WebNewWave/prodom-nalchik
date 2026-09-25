import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  readonly waHref = 'https://wa.me/79640303039';
}
