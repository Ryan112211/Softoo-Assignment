import { fireEvent, render, screen } from '@testing-library/react';
import Cart from './cart';

test('handles quantity changes correctly', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Test Product',
      price: 10,
      img: 'test.jpg',
      colour: 'red',
      quantity: 0,
    },
  ];

  render(<Cart products={mockProducts} />);
  expect(screen.getByText('0')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('plus'));
  expect(screen.getByText('1')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('minus'));
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('removes product correctly', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Test Product',
      price: 10,
      img: 'test.jpg',
      colour: 'red',
      quantity: 4,
    },
  ];

  render(<Cart products={mockProducts} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('remove'));
  expect(screen.getByTestId('total').textContent).toBe('Total: $0.00');
});

test('calculates total price correctly', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Test Product',
      price: 10,
      img: 'test.jpg',
      colour: 'red',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Test Product 2',
      price: 20,
      img: 'test2.jpg',
      colour: 'blue',
      quantity: 0,
    },
  ];

  render(<Cart products={mockProducts} />);
  expect(screen.getByTestId('total').textContent).toBe('Total: $0.00');
});

test('does not change quantity if quantity is 0 and minus is clicked', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Test Product',
      price: 10,
      img: 'test.jpg',
      colour: 'red',
      quantity: 0,
    },
  ];

  render(<Cart products={mockProducts} />);
  expect(screen.getByText('0')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('minus'));
  expect(screen.getByText('0')).toBeInTheDocument();
});
