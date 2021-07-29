import { useState, useEffect } from 'react';

import { threeMostPopularByMake } from '../mostPopular';

const useData = (data: any) => {
  const [popularByMake, setPopularByMake] = useState<any>([]);
  
  useEffect(() => {
    setPopularByMake(threeMostPopularByMake(data));
  }, [data]);

  return popularByMake;
}

export default useData;