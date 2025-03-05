import React, { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { UserRound } from "lucide-react";
import { useRouter } from "next/router";
import BusFacilities from "./busFacilities";

const busInformation = {
  business: "Business Class has fewer seats, so you have more space.",
  economic: "Economic Class",
  executive: "Executive/first class has a loose space on the left which is used as an exit and toilet",
  doubledecker: "Double Decker Class is a two-decker bus, please choose top or bottom deck.",
  sleeper: 'Sleeper class has upper berth and lower berth. marked with seat numbering with U "Upper" and L "Lower"',
}

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
    ["", "", "", "B15", "B16"],
    ["A17", "A18", "C17", "B17", "B18"],
  ],
  executive: [
    ["A1", "A2", "", "B1", "B2"],
    ["A3", "A4", "", "B3", "B4"],
    ["A5", "A6", "", "B5", "B6"],
    ["A7", "A8", "", "B7", "B8"],
    ["", "", "", "B9", "B10"],
    ["", "", "", "B11", "B12"],
    ["A13", "A14", "", "B13", "B14"],
  ],
  sleeper: [
    ["U1", "", "", "", "U2"],
    ["L1", "", "", "", "L2"],
    ["", "", "", "", ""],
    ["U3", "", "", "", "U4"],
    ["L3", "", "", "", "L4"],
    ["", "", "", "", ""],
    ["U5", "", "", "", "U6"],
    ["L5", "", "", "", "L6"],
  ],
  doubledecker1: [
    ["A1", "A2", "", "B1", "B2"],
    ["A3", "A4", "", "B3", "B4"],
    ["A5", "A6", "", "B5", "B6"],
    ["A7", "A8", "", "B7", "B8"],
    ["", "", "", "B9", "B10"],
    ["A11", "A12", "", "B11", "B12"],
    ["A13", "A14", "", "B13", "B14"],
  ],
  doubledecker2: [
    ["U1", "", "", "", "U2"],
    ["L1", "", "", "", "L2"],
    ["", "", "", "", ""],
    ["U3", "", "", "", "U4"],
    ["L3", "", "", "", "L4"],
    ["", "", "", "", ""],
    ["C5", "C6", "", "D5", "D6"],
    ["C7", "C8", "", "D7", "D8"],
    ["C9", "C10", "", "D9", "D10"],
  ],
};

const SeatSelector = ({ selectedSeats, setSelectedSeats }) => {
  const router = useRouter();
  const { busClass } = router.query;
  const [activeDeck, setActiveDeck] = useState("top");

  const getBusLayout = () => {
    if (busClass === "doubledecker") {
      return activeDeck === "top" ? busLayouts.doubledecker1 : busLayouts.doubledecker2;
    }
    return busLayouts[busClass] || busLayouts.economic;
  };

  const getBusInformation = () => {
    return busInformation[busClass] || busInformation.economic;
  };

  const getBusFacilities = () => {
    return busFacilities[busClass] || busFacilities.economic;
  };

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <>
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg bg-white">
      <h2 className="text-lg font-bold">Choose Your Seat</h2>
      {/* If double decker, show toggle button */}
      {busClass === "doubledecker" && (
        <ToggleButtonGroup type="radio" name="deck" value={activeDeck} onChange={setActiveDeck}>
          <ToggleButton id="top-deck" value="top" variant="outline-primary">
            Top Deck
          </ToggleButton>
          <ToggleButton id="bottom-deck" value="bottom" variant="outline-primary">
            Bottom Deck
          </ToggleButton>
        </ToggleButtonGroup>
      )}
      <div className="w-full flex justify-end mr-6">
        <UserRound size={30} color="#000" />
      </div>

      {/* Seat Grid layout */}
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(5, auto)" }}>
        {getBusLayout().flat().map((seat, index) => (
          <div key={index} className="w-12 h-12 flex justify-center items-center">
            {seat ? (
              <Button
                variant="light"
                style={{
                  backgroundColor: selectedSeats.includes(seat) ? "#28a745" : "#dbd7d7",
                }}
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

      <p className="text-sm mt-2">
        Seat selected: {selectedSeats.join(", ") || "none yet"}
      </p>
    </div>    

    {/* Bus Information */}
    <div className="mt-2 mx-4">
      <p>Information:</p>
      <p className="text-sm">{getBusInformation()}</p>
    </div>
    
    </>
  );
};

const BusBooking = () => {
  const router = useRouter();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { busClass } = router.query;

  return (
    <div className="flex flex-col items-center mt-10 pb-10">
      <BusFacilities busClass={busClass} />
      <SeatSelector selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
      <Button className="mt-4" variant="primary" disabled={selectedSeats.length === 0}>
        Order Confirmation
      </Button>
    </div>
  );
};

export default BusBooking;
