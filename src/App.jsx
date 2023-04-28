import React from 'react'
import Layout from './containers/Layout'
import ConverterContainer from './containers/ConverterContainer'

import './css/index.css'
import Converter from './components/Converter'

const App = () => {
  return (
    <Layout>
      <ConverterContainer>
        <Converter />
      </ConverterContainer>
    </Layout>
  )
}

export default App