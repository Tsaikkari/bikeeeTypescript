import { render, screen } from '@testing-library/react';
import { csv } from 'd3';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches csv-data', () => {
  const csvUrl = 'https://gist.githubusercontent.com/Tsaikkari/5de334890699d74ac6198551b1092dd6/raw/stockDB.csv'
  const columns = csv(csvUrl).then(data => {
    console.log(data.columns);
  });
  expect(columns).toBe(["ID", "Make", "Model", "Price", "UserID", "Date"]);
});
