import React from 'react'
import ConverterHeader from './ConverterHeader'

const Converter = () => {
  return (
    <div className='w-11/12 h-96 flex flex-col bg-white border rounded-2xl shadow-md mt-12'>
        <ConverterHeader 
            title={"Criptocurrencies Converter"}
            subtitle={"Your Ultimate Currency Conversion Tool"}
        />
    </div>
  )
}

export default Converter