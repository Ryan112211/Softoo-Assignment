import { ShoppingBasketIcon } from 'lucide-react';
import ModeToggle from '../modeToggle';

const Header = () => {
  return (
    <header className="flex justify-between mx-6 my-2">
      <ShoppingBasketIcon size={44} />
      <ModeToggle />
    </header>
  );
};

export default Header;
