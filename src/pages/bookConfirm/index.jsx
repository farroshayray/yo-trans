import React from 'react'
import Navbar1 from '@/components/ui/navbar'
import BusBooking from '@/components/ui/seatSelect'
import { useRouter } from 'next/router'
import { ArrowLeft } from "lucide-react";

const BookConfirm = () => {
    const router = useRouter();
    const { departure, destination, busClass, date } = router.query;
  return (
    <div className=''>
        <Navbar1 />
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 p-2 bg-transparent"
        >
          <ArrowLeft size={20} color='navy'/>
      </button>
        <div className='border rounded-lg rounded-2xl mx-auto w-fit px-14 py-3 mt-16 bg-blue-950 text-white'>
            <h3>Booking Details</h3>
            <div>
                <p className='mb-0'>Departure: {departure}</p>
                <p className='mb-0'>Destination: {destination}</p>
                <p className='mb-0'>Bus Class: {busClass}</p>
                <p className='mb-0'>Date: {date}</p>
            </div>
        </div>

        <BusBooking />
    </div>
  )
}

export default BookConfirm