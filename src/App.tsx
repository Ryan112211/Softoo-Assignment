import { ThemeProvider } from '@/components/theme-provider';
import Header from './components/common/header/header';
import CartLayout from './components/common/layout/cartLayout';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Header />
      <CartLayout />
    </ThemeProvider>
  );
}

export default App;
