import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 right-0 bottom-0'>
        <div 
          className="w-full hidden lg:block"
          style={{
            backgroundImage: "url('/banner-yo-trans.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px"
          }}
        >
        </div>
        <div 
          className="w-full hidden md:block lg:hidden"
          style={{
            backgroundImage: "url('/banner-yo-trans2.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px"
          }}
        >
        </div>
        <div 
          className="w-full md:hidden"
          style={{
            backgroundImage: "url('/banner-yo-trans3.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px"
          }}
        >
        </div>
      </div>
    </div>
  )
}

export default Banner