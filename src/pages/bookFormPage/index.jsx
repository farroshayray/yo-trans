import React from 'react'
import Navbar1 from '@/components/ui/navbar'
import BookingForm from '@/components/ui/bookingForm'
import { useRouter } from "next/router";
import { ArrowLeft } from "lucide-react";

const index = () => {
  const router = useRouter();
  return (
    <div>
        <Navbar1 />
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 p-2 bg-transparent"
        >
          <ArrowLeft size={20} color='navy'/>
      </button>
        <BookingForm className='mt-10'/>
    </div>
  )
}

export default index