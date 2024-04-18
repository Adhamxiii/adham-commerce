export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  category: string;
  name: string;
}

export interface Product extends simplifiedProduct {
  description: string;
  images: any;
  price_id: string;
}
