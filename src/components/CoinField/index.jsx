import React from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/solid';

const CoinField = ({ coin, value, handleOpenModal }) => {
  return (
    <div className='w-full px-4 py-4 flex flex-col'>
        <div onClick={handleOpenModal} className='flex space-x-2 items-center mb-2 cursor-pointer hover:opacity-80'>
            <div className='flex gap-2'>
                <div className='w-6 h-6 rounded-full bg-gray-300 animate-pulse'></div>
                <p className='font-bold text-purple-950 text-md'>{ coin.name }</p>
            </div>
            <ChevronDownIcon className='w-4 h-4' />
        </div>
        <div className='w-full h-14 p-4 flex justify-end bg-purple-200 rounded-xl'>
            <input defaultValue={ value } className='w-full text-purple-400 font-bold bg-transparent outline-none text-right' type="text"/>
        </div>
    </div>
  )
}

export default CoinField