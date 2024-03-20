import { Product } from '@/types';
import { Button } from '../ui/button';
import { MinusCircle, PlusCircle } from 'lucide-react';
import useProductStore from '@/lib/store/productStore';
import { useEffect } from 'react';

type CartProps = {
  products: Product[];
};

const Cart = ({ products: apiProducts }: CartProps) => {
  const { products, setProducts, colorFilter } = useProductStore();

  const apiProductsWithQuantity = apiProducts.map((product) => ({
    ...product,
    quantity: 1,
  }));

  const handleQuantityChange = (item: Product, change: number) => {
    if (item.quantity === 1 && change === -1) {
      return;
    }

    const updatedProducts = products.map((product) => {
      if (product.id === item.id) {
        return {
          ...product,
          quantity: product.quantity + change,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleRemove = (id: number) => {
    // Handle remove here
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalPriceWithQuantity = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    if (colorFilter === 'all') {
      setProducts(apiProductsWithQuantity);
    } else {
      const filteredProducts = apiProductsWithQuantity.filter(
        (product) => product.colour === colorFilter,
      );
      setProducts(filteredProducts);
    }
  }, [colorFilter]);

  return (
    <div
      className="flex flex-col items-center justify-center mt-10"
      data-cy="product"
    >
      {products.map((item) => (
        <div
          key={item.id}
          className="flex items-start justify-center w-full mb-4"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-[300px] h-[320px] sm:w-[200px] sm:h-[220px]"
          />
          <div className="flex flex-col justify-between ml-4 w-full">
            <h2 data-cy="product-name" className="text-xs font-bold sm:text-lg">
              {item.name}
            </h2>
            <p className="text-sm sm:text-md">${item.price.toFixed(2)}</p>
            <div className="flex justify-end items-center mt-2">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  data-testid="minus"
                  data-cy="minus-button"
                  onClick={() => handleQuantityChange(item, -1)}
                >
                  <MinusCircle size={20} />
                </Button>
                <span data-cy="product-quantity" className="mx-2 sm:text-xs">
                  {item.quantity}
                </span>
                <Button
                  data-testid="plus"
                  data-cy="plus-button"
                  variant="ghost"
                  onClick={() => handleQuantityChange(item, 1)}
                >
                  <PlusCircle size={20} />
                </Button>
              </div>
            </div>
            <Button
              data-testid="remove"
              data-cy="remove-button"
              onClick={() => handleRemove(item.id)}
              className="justify-center w-[100px] mt-2 sm:text-xs"
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <div className="mt-4 flex justify-end w-full px-4 sm:px-0 ">
        <h2 className="text-lg font-bold" data-testid="total" data-cy="total">
          Total: ${totalPriceWithQuantity.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
