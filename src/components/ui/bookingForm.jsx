import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

const BookingForm = ({className}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/js/dist/modal"); // Hanya load modal di client
    }
  }, []);

  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [busClass, setBusClass] = useState("economic");
  const [date, setDate] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/bookConfirm",
      query: {
        departure,
        destination,
        busClass,
        date,
      }
    });

  };

  return (
    <div className={`container ${className}`}>
      <div className="booking-card card shadow-md p-4">
        <h3 className="text-center mb-4">Book Your Trip</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Departure</label>
            <select
              className="form-select"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            >
              <option value="">Choose Departure Place</option>
              <option value="jakarta">Jakarta</option>
              <option value="bandung">Bandung</option>
              <option value="yogyakarta">Yogyakarta</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Destination</label>
            <select
              className="form-select"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            >
              <option value="">Choose Your Destination</option>
              <option value="surabaya">Surabaya</option>
              <option value="bali">Bali</option>
              <option value="medan">Medan</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Bus Class</label>
            <select
              className="form-select"
              value={busClass}
              onChange={(e) => setBusClass(e.target.value)}
              required
            >
              <option value="economic">Economic</option>
              <option value="business">Business</option>
              <option value="executive">Executive</option>
              <option value="doubledecker">Double Decker</option>
              <option value="sleeper">Sleeper</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Departure Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
