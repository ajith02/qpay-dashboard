// server.js
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

// Allow requests from your React app
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Proxy endpoint
app.get("/api/transactions", async (req, res) => {
  const { service_id = 111, page = 0 } = req.query;
  const token = process.env.VITE_WALLET_TOKEN;

  if (!token) {
    return res.status(401).json({ error: "Server token not set" });
  }

  try {
    const response = await axios.get(
      "http://64.227.189.27/wallet/api/v1/transaction_history",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache",
        },
        params: { service_id, page },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || err.message || "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
