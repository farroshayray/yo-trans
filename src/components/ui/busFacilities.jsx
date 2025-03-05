import React, { useState } from "react";
import { useRouter } from "next/router";

const busFacilities = {
    business: [
      { icon: "❄️", label: "Air Conditioner" },
      { icon: "💺", label: "Reclining Seats" },
      { icon: "🍽️", label: "Meal Provided" },
      { icon: "📺", label: "Entertainment System" },
      { icon: "🔌", label: "Power Outlet" },
    ],
    economic: [
      { icon: "❄️", label: "Air Conditioner" },
      { icon: "💺", label: "Standard Seats" },
      { icon: "🧴", label: "Basic Amenities" },
    ],
    executive: [
      { icon: "❄️", label: "Air Conditioner" },
      { icon: "💺", label: "Luxury Reclining Seats" },
      { icon: "🚻", label: "Toilet Available" },
      { icon: "🍽️", label: "Meal Provided" },
      { icon: "📺", label: "Entertainment System" },
      { icon: "🔌", label: "Power Outlet" },
    ],
    doubledecker: [
      { icon: "❄️", label: "Air Conditioner" },
      { icon: "💺", label: "Reclining Seats" },
      { icon: "🚻", label: "Toilet Available" },
      { icon: "📺", label: "Entertainment System" },
      { icon: "🔌", label: "Power Outlet" },
      { icon: "🍽️", label: "Meal Provided" },
      { icon: "🛏️", label: "Sleeper Seats on Bottom Deck" },
    ],
    sleeper: [
      { icon: "❄️", label: "Air Conditioner" },
      { icon: "🛏️", label: "Upper and Lower Berths" },
      { icon: "🔌", label: "Power Outlet" },
      { icon: "📺", label: "Entertainment System" },
      { icon: "🍽️", label: "Meal Provided" },
    ],
  };

const BusFacilities = ({ busClass }) => {
    const facilities = busFacilities[busClass] || [];
  
    return (
      <div className="p-4 border rounded-lg bg-white mb-4">
        <h3 className="text-lg font-bold mb-2">Facilities</h3>
        <ul className="grid grid-cols-2 gap-2">
          {facilities.map((facility, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-xl">{facility.icon}</span>
              <span>{facility.label}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default BusFacilities  