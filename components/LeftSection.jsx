import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { BsChevronRight } from 'react-icons/bs';

function LeftSection({ className, storesData }) {
  const [data, setData] = useState(storesData);
  const [page, setPage] = useState(0);
  const rowCount = storesData.length;
  const size = 7;

  const prevPageClickHandler = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  const nextPageClickHandler = () => {
    if (page < Math.ceil(rowCount / size) - 1) {
      setPage(page + 1);
    }
  };

  // filter storesData by page
  useEffect(() => {
    const storesDataPage = storesData.slice(page * size, (page + 1) * size);
    setData(storesDataPage);
  }, [page, storesData]);

  return (
    <div className={`${className} space-y-4`}>
      <div className='flex items-center gap-1'>
        {/* Heading and sub heading */}
        <div className='flex-1'>
          <h1 className='m-0 font-bold'>Partner stores across India</h1>
          <p className='text-sm text-gray-600'>
            Explore our partner stores across different states and cities.
          </p>
        </div>
        {/* pagination */}
        <div className='flex items-center gap-2'>
          <button className='w-8 h-8 rounded-full flex items-center justify-center border border-gray-400 hover:bg-gray-200'>
            <GrFormPrevious
              onClick={prevPageClickHandler}
              className='scale-125'
            />
          </button>
          <button className='w-8 h-8 rounded-full flex items-center justify-center border border-gray-400 hover:bg-gray-200'>
            <GrFormNext onClick={nextPageClickHandler} className='scale-125' />
          </button>
        </div>
      </div>
      <ul>
        {data.map(({ id, ST_CODE, ST_NM, numOfStores }) => (
          <li
            key={id}
            className='border-b last:border-b-0 p-2 border-l-2 border-l-transparent hover:border-l-purple-400 hover:bg-purple-100'
          >
            <Link href={`/states/${ST_CODE}`}>
              <a className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  {/* item number */}
                  <div className='flex items-center justify-center h-8 w-8 rounded-full bg-indigo-500 text-white font-semibold text-xs'>
                    {id}
                  </div>
                  {/* state name and numOfStores */}
                  <div>
                    <div className='text-sm leading-5 text-gray-900'>
                      {ST_NM}
                    </div>
                    <div className='inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-indigo-100 text-indigo-800'>
                      {numOfStores} stores
                    </div>
                  </div>
                </div>
                <div>
                  <BsChevronRight className='text-gray-600 font-light scale-125' />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftSection;
