import React from 'react'

const HeaderTrinding = () => {
  return (
    <div className='flex justify-between items-center border-gray-300/50 border-b-2 pb-6 pt-2'>
        <div className='text-[1.3rem] max-lg:text-sm'>Trending Headlines</div>
        <button className=' text-white px-4 py-1 bg-black rounded-md text-nowrap max-lg:text-sm'>View All</button>
    </div>
  )
}

export default HeaderTrinding