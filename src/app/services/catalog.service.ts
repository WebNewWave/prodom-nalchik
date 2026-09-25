import { Injectable, signal, computed } from '@angular/core';
import {
  Brand,
  Category,
  ConfiguratorChoice,
  InstagramPost,
  Product
} from '../models/catalog.models';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  // === КАТЕГОРИИ ===
  readonly categories = signal<Category[]>([
    {
      id: 'tile',
      slug: 'plitka',
      name: 'Плитка',
      tagline: 'Керамическая плитка',
      description: 'Классическая керамика для ванных, кухонь и общественных пространств.',
      itemCount: 480,
      accentColor: 'var(--accent-terra)',
      symbol: 'M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z'
    },
    {
      id: 'porcelain',
      slug: 'keramogranit',
      name: 'Керамогранит',
      tagline: 'Технический и декоративный',
      description: 'Высокопрочный материал для полов, фасадов, лестниц и коммерческих объектов.',
      itemCount: 320,
      accentColor: 'var(--accent-primary)',
      symbol: 'M4 4l8-2 8 2v8c0 5-4 8-8 10-4-2-8-5-8-10V4z'
    },
    {
      id: 'sanitary',
      slug: 'santehnika',
      name: 'Сантехника',
      tagline: 'Унитазы, раковины, ванны, смесители',
      description: 'Aquatek, Roca, Grohe и другие ведущие бренды. Инсталляции, душевые системы.',
      itemCount: 215,
      accentColor: 'var(--accent-sage)',
      symbol: 'M12 2C9 2 7 4 7 7v3H5v12h14V10h-2V7c0-3-2-5-5-5zm-3 5c0-2 1-3 3-3s3 1 3 3v3H9V7z'
    },
    {
      id: 'doors',
      slug: 'dveri',
      name: 'Двери',
      tagline: 'Межкомнатные и входные',
      description: 'Профильные двери ProfilDoors, эко-шпон, эмаль, массив. Установка под ключ.',
      itemCount: 96,
      accentColor: 'var(--accent-gold)',
      symbol: 'M6 2h12v20H6V2zm2 2v16h8V4H8zm4 13a1 1 0 100-2 1 1 0 000 2z'
    },
    {
      id: 'facade',
      slug: 'fasad',
      name: 'Фасадные решения',
      tagline: 'Гибкий камень Decaro и др.',
      description: 'Гибкий камень для фасадов и интерьеров. Декоративные панели, термопанели.',
      itemCount: 58,
      accentColor: 'var(--accent-sage)',
      symbol: 'M3 12l9-9 9 9-2 2-7-7-7 7-2-2zm0 6l9-9 9 9-2 2-7-7-7 7-2-2z'
    },
    {
      id: 'tools',
      slug: 'instrumenty',
      name: 'Инструменты',
      tagline: 'Для укладки и монтажа',
      description: 'Профессиональный инструмент, клеи, затирки, крестики, системы выравнивания.',
      itemCount: 142,
      accentColor: 'var(--text-secondary)',
      symbol: 'M14.7 6.3a4 4 0 00-5.4 5.4l-6.4 6.4 1.4 1.4 6.4-6.4a4 4 0 005.4-5.4l-2.5 2.5-2-2 2.5-2.5z'
    }
  ]);

  // === БРЕНДЫ ===
  readonly brands = signal<Brand[]>([
    {
      id: 'italon',
      name: 'Italon',
      tagline: 'Итальянское качество. Российское производство.',
      description: 'Крупнейший производитель керамогранита и плитки в России. PRODOM — официальный дилер.',
      accentColor: 'var(--accent-primary)',
      category: ['tile', 'porcelain'],
      isPartner: true
    },
    {
      id: 'aquatek',
      name: 'Aquatek',
      tagline: 'Сантехника российского премиума',
      description: 'Унитазы, инсталляции, раковины с гарантией 25 лет. Акция: −20% на коллекцию.',
      accentColor: 'var(--accent-terra)',
      category: ['sanitary'],
      isPartner: true
    },
    {
      id: 'decaro',
      name: 'Decaro',
      tagline: 'Гибкий камень. Революция в отделке.',
      description: 'Натуральный камень на текстильной основе. Тонкий, лёгкий, гибкий. Для фасадов и интерьеров.',
      accentColor: 'var(--accent-sage)',
      category: ['facade'],
      isPartner: true
    }
  ]);

  // === КОНФИГУРАТОР «СОБЕРИ ВАННУЮ» ===
  readonly configuratorChoices = signal<ConfiguratorChoice[]>([
    {
      categoryId: 'floor',
      label: 'Пол',
      accent: 'var(--accent-primary)',
      tiles: ['Мрамор беж', 'Бетон серый', 'Террацо', 'Сланец чёрный', 'Песок', 'Травертин']
    },
    {
      categoryId: 'wall',
      label: 'Стены',
      accent: 'var(--accent-terra)',
      tiles: ['Белый глянец', 'Серый матовый', 'Мозаика', 'Кабанчик белый', 'Беж структурный', 'Оливковый']
    },
    {
      categoryId: 'sanitary',
      label: 'Сантехника',
      accent: 'var(--accent-sage)',
      tiles: ['Унитаз подвесной', 'Раковина накладная', 'Ванна акриловая', 'Душевая система', 'Смеситель чёрный', 'Инсталляция']
    },
    {
      categoryId: 'accessory',
      label: 'Аксессуары',
      accent: 'var(--accent-gold)',
      tiles: ['Зеркало LED', 'Полотенцесушитель', 'Тумба подвесная', 'Держатель чёрный', 'Крючки латунь', 'Светильник']
    }
  ]);

  // === INSTAGRAM ===
  readonly instagramPosts = signal<InstagramPost[]>([
    { id: 'post-01', imageUrl: 'assets/instagram/post-01.jpg', caption: 'Наша новинка — айфон среди зеркал 🔥', isVideo: false },
    { id: 'post-02', imageUrl: 'assets/instagram/post-02.jpg', caption: 'Новая коллекция в наличии', isVideo: false },
    { id: 'post-03', imageUrl: 'assets/instagram/post-03.jpg', caption: 'Гибкий камень Decaro — для фасадов и интерьеров', isVideo: false },
    { id: 'post-04', imageUrl: 'assets/instagram/post-04.jpg', caption: 'Плитка Italon в шоуруме', isVideo: false },
    { id: 'post-05', imageUrl: 'assets/instagram/post-05.jpg', caption: 'Новинки керамогранита', isVideo: false },
    { id: 'post-06', imageUrl: 'assets/instagram/post-06.jpg', caption: 'ТЦ PRODOM — Атажукина 107', isVideo: false },
    { id: 'post-07', imageUrl: 'assets/instagram/post-07.jpg', caption: 'Aquatek −20%', isVideo: false },
    { id: 'post-08', imageUrl: 'assets/instagram/post-08.jpg', caption: 'Большой выбор зеркал', isVideo: false },
    { id: 'post-09', imageUrl: 'assets/instagram/post-09.jpg', caption: 'Сантехника в наличии', isVideo: false },
    { id: 'post-10', imageUrl: 'assets/instagram/post-10.jpg', caption: 'Шоурум', isVideo: false },
    { id: 'post-11', imageUrl: 'assets/instagram/post-11.jpg', caption: 'Новая коллекция', isVideo: false },
    { id: 'post-12', imageUrl: 'assets/instagram/post-12.jpg', caption: 'PRODOM Нальчик', isVideo: false }
  ]);

  // === ВЫБОР КОНФИГУРАТОРА ===
  readonly selection = signal({ floor: 0, wall: 0, sanitary: 0, accessory: 0 });

  selectTile(category: 'floor' | 'wall' | 'sanitary' | 'accessory', index: number): void {
    this.selection.update(s => ({ ...s, [category]: index }));
  }

  // === COMPUTED ===
  readonly categoriesBySlug = computed(() => {
    const map = new Map<string, Category>();
    this.categories().forEach(c => map.set(c.slug, c));
    return map;
  });

  readonly totalCategories = computed(() => this.categories().length);
  readonly totalProducts = computed(() =>
    this.categories().reduce((sum, c) => sum + c.itemCount, 0)
  );
}