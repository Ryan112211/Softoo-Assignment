import React from 'react';
import ColorFilter from '../colorFilter';
import useSWR from 'swr';
import { Product } from '@/types';
import Cart from '@/components/cart/cart';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CartLayout = () => {
  const { data, error, isLoading } = useSWR(
    'https://my-json-server.typicode.com/benirvingplt/products/products',
    fetcher,
  );
  const products = data;
  const colorsAvailable = products?.map((product: Product) => product?.colour);
  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  return (
    <div className="mx-6 my-10">
      <ColorFilter colorsAvailable={colorsAvailable || []} />
      <Cart products={products} />
    </div>
  );
};

export default CartLayout;
