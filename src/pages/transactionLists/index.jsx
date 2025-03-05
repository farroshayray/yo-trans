import { useEffect, useState } from "react";
import Navbar1 from "@/components/ui/navbar";
import { TicketIcon } from "lucide-react";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        if (!userId) {
          throw new Error("User not found. Please log in.");
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transaction/user/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();
        setTransactions(data.transactions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
      <Navbar1 />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Tickets</h1>
        {loading && <p>Loading transactions...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && transactions.length === 0 && <p>No transactions found.</p>}
        {!loading && !error && transactions.length > 0 && (
          <div className="w-full max-w-4xl space-y-6">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="bg-white shadow-lg rounded-lg p-6 relative border-l-4 border-blue-500 mx-2">
                <div className="absolute top-3 right-3 text-blue-500"><TicketIcon size={24} /></div>
                <h2 className="text-xl font-semibold text-gray-900">{transaction.departure} ➝ {transaction.destination}</h2>
                <p className="text-sm text-gray-500">Bus Class: {transaction.bus_class}</p>
                <p className="text-sm text-gray-500">Date: {transaction.date}</p>
                <p className="text-sm text-gray-500">Seats: {transaction.selected_seats.join(", ")}</p>
                <p className="text-lg font-bold text-blue-600">Rp {parseInt(transaction.total_price).toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Status: <span className={`font-bold ${transaction.status === 'confirmed' ? 'text-green-600' : 'text-red-600'}`}>{transaction.status}</span></p>
                <p className="text-xs text-gray-400">Booked on: {new Date(transaction.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TransactionsPage;
