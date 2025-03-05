import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import Navbar1 from "@/components/ui/navbar";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const OrderConfirmation = () => {
  const router = useRouter();
  const { departure, destination, busClass, date, selectedSeats, totalPrice } = router.query;

  const [isChecked, setIsChecked] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);

  const handlePayment = async () => {
    if (!userId) {
      alert("User ID tidak ditemukan. Silakan login ulang.");
      return;
    }

    const transactionData = {
      user_id: userId,
      departure,
      destination,
      bus_class: busClass,
      date,
      selected_seats: selectedSeats ? JSON.parse(selectedSeats) : [],
      total_price: parseInt(totalPrice)
    };

    try {
      const accessToken = localStorage.getItem("access_token");

      const response = await fetch(`${API_BASE_URL}/transaction/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(transactionData),
      });
      console.log("Response status:", response.status);
      console.log("Response body:", await response.json());

      if (response.ok) {
        alert("Transaksi berhasil! Anda akan dialihkan ke halaman utama.");
        router.push("/home");
      } else {
        alert("Gagal memproses transaksi. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error saat mengirim transaksi:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="flex justify-center items-center min-h-screen bg-blue-950">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={24} />
            <h1 className="text-xl font-semibold">Order Confirmation</h1>
          </div>
          <div className="mt-4 space-y-2">
            <p><strong>Departure:</strong> {departure}</p>
            <p><strong>Destination:</strong> {destination}</p>
            <p><strong>Bus Class:</strong> {busClass}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Selected Seats:</strong> {selectedSeats ? JSON.parse(selectedSeats).join(", ") : "No seats selected"}</p>
            <p><strong>Total Price:</strong> Rp {parseInt(totalPrice).toLocaleString()}</p>
          </div>

          {/* Checkbox for confirmation */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="checkbox"
              id="confirm"
              className="w-4 h-4"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="confirm" className="text-sm">
              I have reviewed my order details.
            </label>
          </div>

          {/* Payment Button (only visible when checked) */}
          {isChecked && (
            <button
              className="mt-4 w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handlePayment}
            >
              1-Tap Payment
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
