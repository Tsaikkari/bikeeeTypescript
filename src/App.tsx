import { useState, useEffect } from 'react';
import { csv } from 'd3';

import Card from './components/Card';
import Chart from './components/Chart';
import useData from './hooks/useData';
import useAlternative from './hooks/useAlternative';
import './App.css';

const csvUrl =
  'https://gist.githubusercontent.com/Tsaikkari/5de334890699d74ac6198551b1092dd6/raw/stockDB.csv';

const App = () => {
  const [data, setData] = useState<any[]>([]);
  const mostPopularBikes = useData(data);
  const mostPopularByMake = useAlternative(data);

  console.log('mostPopularBikes', mostPopularBikes)
  console.log('mostPopularByMake', mostPopularByMake)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, []);

  return (
    <div>
      <h1 className='heading'>Most popular models</h1>
      {mostPopularBikes ? (
        mostPopularBikes.map((bike: any) => (
          <Card
            key={bike.Occurrences}
            model={bike.Model}
            occurrences={bike.Occurrences}
            make={bike.Make}
          />
        ))
      ) : (
        'Loading...'
      )}
      <h1 className='heading'>Most popular makes</h1>
      <Chart data={mostPopularByMake} />
    </div>
  );
}

export default App;
