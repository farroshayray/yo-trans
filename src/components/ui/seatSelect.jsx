import React, { useState } from "react";
import { Button } from "react-bootstrap";

const busLayout = [
  ["A1", "A2", "", "B1", "B2"],
  ["A3", "A4", "", "B3", "B4"],
  ["A5", "A6", "", "B5", "B6"],
  ["A7", "A8", "", "B7", "B8"],
  ["A9", "A10", "", "B9", "B10"],
  ["A11", "A12", "", "B11", "B12"]
];

const SeatSelector = ({ selectedSeats, setSelectedSeats }) => {
  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-lg font-bold">Pilih Tempat Duduk</h2>
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
      <p className="text-sm mt-2">Tempat Duduk Dipilih: {selectedSeats.join(", ") || "Belum ada"}</p>
    </div>
  );
};

const BusBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="flex flex-col items-center mt-10">
      <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <Button className="mt-4" variant="primary" disabled={selectedSeats.length === 0}>
        Konfirmasi Pemesanan
      </Button>
    </div>
  );
};

export default BusBooking;
