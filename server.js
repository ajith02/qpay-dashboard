import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Proxy endpoint for transactions
app.get("/api/transactions", async (req, res) => {
  const page = req.query.page || 0;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is required" });
  }

  try {
    const response = await axios.get(
      "http://64.227.189.27/wallet/api/v1/transaction_history",
      {
        headers: {
          Authorization: authHeader, // Pass Bearer token directly
          "Cache-Control": "no-cache",
        },
        params: { service_id: 111, page },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
