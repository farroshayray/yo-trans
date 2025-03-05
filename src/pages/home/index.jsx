// pages/home/index.tsx
import React, { useState, useEffect } from "react";
import Navbar1 from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import BookingForm from "@/components/ui/bookingForm";
import Features from "@/components/ui/features";
import BookNow from "@/components/ui/bookNow";
import Footer from "@/components/ui/footer";


const Home = () => {

  return (
    <div className="">
      <Navbar1 />
      <Banner />
      <BookingForm className="mt-80"/>
      <Features />
      <BookNow />
      <Footer />

    </div>
  );
};

export default Home;
