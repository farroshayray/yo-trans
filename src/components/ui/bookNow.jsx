import React from 'react'
import { Button } from 'react-bootstrap'

const BookNow = () => {
  return (
    <div className='d-flex justify-content-center'>
        <div className='text-center'>
            <p>Come on, book a bus now! There will be many promotions waiting, don't miss it!</p>
            <Button href='/bookFormPage' variant="primary">Book Now</Button>
        </div>
    </div>
  )
}

export default BookNow