import { queryByAttribute, render, screen } from '@testing-library/react';
import Basketball from './App';

test('renders click text', () => {
  render(<Basketball />);
  const clickText = screen.getByText(/You clicked/i);
  expect(clickText).toBeInTheDocument();
});

test('renders basketball text', () => {
  render(<Basketball />);
  const basketballText = screen.getByText(/Your basketball brand/i);
  expect(basketballText).toBeInTheDocument();
});

test('renders click button', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const dom = render(<Basketball />);
  const clickButton = getById(dom.container, 'clickButton');
  expect(clickButton).toBeInTheDocument();
});
