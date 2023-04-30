import React from 'react'
import ConverterHeader from './ConverterHeader'
import ConverterBody from './ConverterBody'
import CoinField from '../CoinField'

import { ArrowLongDownIcon } from '@heroicons/react/24/solid';

const Converter = () => {
  const coin = {
    name: "BTC"
  }

  return (
    <div className='w-11/12 flex flex-col bg-white border rounded-2xl shadow-md pb-4 mt-12'>
        <ConverterHeader 
            title={"Criptocurrencies Converter"}
            subtitle={"Your Ultimate Currency Conversion Tool"}
        />
        <ConverterBody>
          <CoinField coin={coin} value={"0.0"}/>
          <div className='w-8 h-8 p-2 mt-2 rounded-full bg-purple-300 hover:opacity-80 cursor-pointer flex items-center justify-center'>
            <ArrowLongDownIcon />
          </div>
          <CoinField coin={coin} value={"0.0"}/>
        </ConverterBody>
    </div>
  )
}

export default Converter