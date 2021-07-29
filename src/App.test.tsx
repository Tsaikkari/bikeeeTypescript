import { render, screen } from '@testing-library/react';
import { csv } from 'd3';

import App from './App';
import { threeMostPopular } from './mostPopular'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches csv-data', () => {
  const csvUrl = 'https://gist.githubusercontent.com/Tsaikkari/5de334890699d74ac6198551b1092dd6/raw/stockDB.csv'
  const columns = csv(csvUrl).then(data => {
    return data.columns;
  });
  expect(columns).toBe(["ID", "Make", "Model", "Price", "UserID", "Date"]);
});

test('finds the most popular models', () => {
  const csvUrl = 'https://gist.githubusercontent.com/Tsaikkari/5de334890699d74ac6198551b1092dd6/raw/stockDB.csv'
  const data = csv(csvUrl).then(data => {
    return data;
  });
  const popular = threeMostPopular(data);
  expect(popular).toBe([
    {Model: "ec5", Occurences: 4, Make: "Gudereit"},
    {Model: "beryll", Occurrences: 3, Make: "Diamant"},
    {Model: "et9evo", Occurrences: 2, Make: "Gudereit"}
  ]);
});
