import React from 'react'

const ConverterHeader = ({ title, subtitle }) => {
  return (
    <div className='w-full h-1/4 p-4 border-b space-y-2'>
        <p className='font-bold text-lg text-purple-950'>{ title }</p>
        <p className='font-thin text-xs text-purple-950'>
           { subtitle }
        </p>
    </div>
  )
}

export default ConverterHeader