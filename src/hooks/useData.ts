import { useState, useEffect } from 'react';

import { threeMostPopular } from '../mostPopular';

const useData = (data: any) => {
  const [popular, setPopular] = useState<any>([]);
  
  useEffect(() => {
    setPopular(threeMostPopular(data));
  }, [data]);

  return popular;
}

export default useData;

