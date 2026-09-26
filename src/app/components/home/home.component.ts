import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { BrandsStripComponent } from '../brands-strip/brands-strip.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { InstagramFeedComponent } from '../instagram-feed/instagram-feed.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappFabComponent } from '../whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    BrandsStripComponent,
    CatalogComponent,
    InstagramFeedComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFabComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
