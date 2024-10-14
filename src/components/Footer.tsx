import React from 'react'

const Footer: React.FC = () => {
  return (
   <footer className='fixed bottom-0 w-full' >
      <div className='flex items-center justify-center'>
        <p>&copy; 2024 - All rights reserved</p>
        <p>power by <a href="https://github.com/ainafi" className='font-semibold text-blue-700'>ainafi</a></p>
      </div>
   </footer>
  )
}

export default Footer