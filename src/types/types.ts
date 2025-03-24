export type Product = {
  isNew: any;
  badgeInfo: any;
  price: number;
  volume: string;
  id: number;
  name: string;
  photo: string;
  description: string;
  sizes: { [key: string]: number | undefined };
  size?: string;
  quantity?: number;
};
