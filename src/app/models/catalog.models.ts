// Каталог PRODOM — mock-данные. Заменяются на реальные API при наличии.

export interface Category {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly itemCount: number;
  readonly accentColor: string;
  readonly symbol: string; // SVG-символ для карточки
}

export interface Brand {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly accentColor: string;
  readonly category: string[];
  readonly isPartner: boolean;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly brandId: string;
  readonly categoryId: string;
  readonly price: number;
  readonly priceUnit: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface InstagramPost {
  readonly id: string;
  readonly imageUrl: string;
  readonly caption: string;
  readonly isVideo: boolean;
}

export type ConfiguratorCategoryId = 'floor' | 'wall' | 'sanitary' | 'accessory';

export interface ConfiguratorChoice {
  readonly categoryId: ConfiguratorCategoryId;
  readonly label: string;
  readonly tiles: readonly string[];
  readonly accent: string;
}

export interface ConfiguratorSelection {
  floor: number;
  wall: number;
  sanitary: number;
  accessory: number;
}