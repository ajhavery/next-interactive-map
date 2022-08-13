function Tooltip({ tooltip, className }) {
  return (
    <div
      className={`${className} w-44 bg-white border rounded shadow ${
        tooltip ? 'block' : 'hidden'
      }`}
    >
      <div className='px-2 py-2 space-y-2'>
        <div className='px-1 space-y-1'>
          <h3 className='border-b m-0 pb-1 font-bold'>{tooltip?.state}</h3>
          <p className='text-sm'>{tooltip?.numOfStores} stores</p>
        </div>
        <div className='w-full inline-flex items-center px-1.5 py-1 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800'>
          Click on map to explore
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
