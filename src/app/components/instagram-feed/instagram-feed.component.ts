import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-feed.component.html',
  styleUrl: './instagram-feed.component.scss'
})
export class InstagramFeedComponent {
  private readonly catalog = inject(CatalogService);
  readonly posts = this.catalog.instagramPosts;
  readonly profileUrl = 'https://www.instagram.com/prodom.nalchik';
}
