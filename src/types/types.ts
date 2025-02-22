export type Product = {
  id: number;
  name: string;
  photo: string;
  description: string;
  sizes: { [key: string]: number | undefined };
  size?: string;
  quantity?: number;
};
