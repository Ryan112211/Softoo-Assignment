import { Product } from '@/types';
import { create } from 'zustand';

type ProductStoreState = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  colorFilter: string;
  setColorFilter: (color: string) => void;
};

const useProductStore = create<ProductStoreState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  colorFilter: 'all',
  setColorFilter: (color) => set({ colorFilter: color }),
}));

export default useProductStore;
