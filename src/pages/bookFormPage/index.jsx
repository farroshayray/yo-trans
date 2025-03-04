import React from 'react'
import Navbar1 from '@/components/ui/navbar'
import BookingForm from '@/components/ui/bookingForm'

const index = () => {
  return (
    <div>
        <Navbar1 />
        <BookingForm className='mt-10'/>
    </div>
  )
}

export default index