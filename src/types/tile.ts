export type Tile = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  currency: string;
  dimensions: string;
  material: string;
  inStock: boolean;
  creator: string;
  styleDescription: string;
  tags: string[];
  featured?: boolean;
};
