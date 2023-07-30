export interface BrandDTO {
  id: number;
  name: string;
  image: string;
}

export interface CategoryDTO {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ProductDTO {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  brand: BrandDTO;
  category: CategoryDTO;
}
