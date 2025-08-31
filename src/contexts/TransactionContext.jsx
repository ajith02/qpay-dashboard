import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TransactionContext = createContext();
export const useTransaction = () => useContext(TransactionContext);

const token = import.meta.env.VITE_WALLET_TOKEN;

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = async (pageNumber = 0) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("/api/transactions", {
        params: { service_id: 111, page: pageNumber },
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in header
        },
      });

      setTransactions(response.data.data || []); // notice 'data' field from backend
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      setError(
        err.response?.data?.error || err.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions(page);
  }, [page]);

  return (
    <TransactionContext.Provider
      value={{ transactions, loading, error, page, setPage, totalPages }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
