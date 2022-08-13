import { useState } from 'react';
import Link from 'next/link';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import INDIA_TOPO_JSON from '../data/indian-states-2020.json';
import Tooltip from './Tooltip';

const PROJECTION_CONFIG = {
  scale: 1000,
  center: [85.9629, 22.5937],
};

const mapStyle = {
  default: {
    fill: '#ECEFF1',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none',
  },
  hover: {
    fill: '#CFD8DC',
    stroke: '#607D8B',
    strokeWidth: 1,
    outline: 'none',
  },
  pressed: {
    fill: '#FF5722',
    stroke: '#607D8B',
    strokeWidth: 1,
    outline: 'none',
  },
};

function MapSection({ className, storesData }) {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div className={`${className} relative`}>
      <Tooltip tooltip={tooltipContent} className='absolute top-0 right-2' />
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection='geoMercator'
        data-tip=''
        style={{ outline: 'none', height: '30rem' }}
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const cur = storesData.find(
                (s) => s.ST_CODE === geo.properties.ST_CODE
              );

              return (
                <Link
                  href={`/state/${geo.properties.ST_CODE}`}
                  key={geo.rsmKey}
                >
                  <a>
                    <Geography
                      geography={geo}
                      style={mapStyle}
                      onMouseEnter={() => {
                        const { ST_NM } = geo.properties;
                        setTooltipContent({
                          state: ST_NM,
                          numOfStores: cur ? cur.numOfStores : 0,
                        });
                      }}
                      onMouseLeave={() => {
                        setTooltipContent(null);
                      }}
                    />
                  </a>
                </Link>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default MapSection;
