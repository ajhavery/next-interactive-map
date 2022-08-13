import { useEffect, useState } from 'react';

import LeftSection from '../components/LeftSection';
import MapSection from '../components/MapSection';
import { statesStoresData } from '../data/states-stores-data';

function Index() {
  const [storesData, setStoresData] = useState([]);
  useEffect(() => {
    setStoresData(statesStoresData);
  }, []);

  return (
    <div className='container mx-auto mt-10 border-t border-b p-4 grid grid-cols-2 bg-white'>
      <LeftSection storesData={storesData} />
      <MapSection storesData={storesData} />
    </div>
  );
}

export default Index;
