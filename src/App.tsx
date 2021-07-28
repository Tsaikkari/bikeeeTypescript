import { useState, useEffect } from 'react';
import { csv } from 'd3';

import Card from './components/Card';
import useData from './hooks/useData';
import './App.css';

const csvUrl =
  'https://gist.githubusercontent.com/Tsaikkari/5de334890699d74ac6198551b1092dd6/raw/stockDB.csv';

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const mostPopularBikes = useData(data);

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, []);

  return (
    <div>
      <h1 className='heading'>Most popular models</h1>
      {mostPopularBikes ? (
        mostPopularBikes.map((bike: any) => (
          <Card
            key={bike.occurrences}
            model={bike.Model}
            occurrences={bike.occurrences}
            make={bike.Make}
          />
        ))
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default App;
