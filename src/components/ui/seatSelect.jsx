import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { UserRound } from 'lucide-react';
import { useRouter } from "next/router";

const busLayouts = {
    business: [
      ["A1", "A2", "", "B1", "B2"],
      ["A3", "A4", "", "B3", "B4"],
      ["A5", "A6", "", "B5", "B6"],
      ["A7", "A8", "", "B7", "B8"],
      ["A9", "A10", "", "B9", "B10"],
      ["A11", "A12", "", "B11", "B12"],
    ],
    economic: [
      ["A1", "A2", "", "B1", "B2"],
      ["A3", "A4", "", "B3", "B4"],
      ["A5", "A6", "", "B5", "B6"],
      ["A7", "A8", "", "B7", "B8"],
      ["A9", "A10", "", "B9", "B10"],
      ["A11", "A12", "", "B11", "B12"],
      ["A13", "A14", "", "B13", "B14"],
      ["A15", "A16", "", "B15", "B16"],
    ],
    executive: [
      ["A1", "A2", "", "B1", "B2"],
      ["A3", "A4", "", "B3", "B4"],
      ["A5", "A6", "", "B5", "B6"],
      ["A7", "A8", "", "B7", "B8"],
      ["", "", "", "B9", "B10"],
      ["", "", "", "B11", "B12"],
      ["A13", "A14", "", "B13", "B14"]
    ],
    sleeper: [
        ["U1", "", "", "", "U2"], 
        ["L1", "", "", "", "L2"],
        ["", "", "", "", ""],
        ["U3", "", "", "", "U4"],
        ["L3", "", "", "", "L4"],
        ["", "", "", "", ""],
        ["U5", "", "", "", "U6"],
        ["L5", "", "", "", "L6"]
      ]
  };

const SeatSelector = ({ selectedSeats, setSelectedSeats }) => {
    const router = useRouter();
    const { departure, destination, busClass, date } = router.query;
    console.log(busClass);
    const busLayout = busLayouts[busClass] || busLayouts.economic;
    const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-white">
      <h2 className="text-lg font-bold">Choose Your Seat</h2>
      <div className="w-full flex justify-end mr-6">
        <UserRound size={30} color="#000" />
      </div>
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(5, auto)" }}>
        {busLayout.flat().map((seat, index) => (
          <div key={index} className="w-12 h-12 flex justify-center items-center">
            {seat ? (
              <Button
                variant="light"
                style={{
                    backgroundColor: selectedSeats.includes(seat) ? "#28a745" : "#dbd7d7"}} // Warna hijau jika dipilih
                className="w-full h-full text-sm"
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </Button>
            ) : (
              <div className="w-8" />
            )}
          </div>
        ))}
      </div>
      <p className="text-sm mt-2">Seat selected: {selectedSeats.join(", ") || "none yet"}</p>
    </div>
  );
};

const BusBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="flex flex-col items-center mt-10 pb-10">
      <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <Button className="mt-4" variant="primary" disabled={selectedSeats.length === 0}>
        Konfirmasi Pemesanan
      </Button>
    </div>
  );
};

export default BusBooking;
