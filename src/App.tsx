import React from 'react'
import MultiStepForm from './MultiStep'
import { Footer } from 'react-day-picker'

const App:React.FC = () => {
  

  return (
    <div className='relative'>
        <MultiStepForm/>
        <Footer/>
    </div>
  )
}

export default App