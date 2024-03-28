import { ShoppingBasketIcon } from 'lucide-react';
import ModeToggle from '../modeToggle';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="flex justify-between mx-6 my-2">
      <Button variant="ghost" onClick={() => (window.location.href = '/')}>
        <ShoppingBasketIcon size={44} />
      </Button>
      <ModeToggle />
    </header>
  );
};

export default Header;
