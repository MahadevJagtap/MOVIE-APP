import React from 'react'
import notfound from'../../public/404.gif'

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <img src={notfound} alt="" />
    </div>
  )
}

export default NotFound