// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import https from "https";

const app = express();
const PORT = 5000;

// Allow requests from React app
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Proxy endpoint for transactions
app.get("/api/transactions", async (req, res) => {
  const page = req.query.page || 0;
  const service_id = req.query.service_id || 111;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header is required" });
  }

  // ⚠️ Ignore SSL certificate and hostname errors (for dev/testing)
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,          // ignore invalid cert
    checkServerIdentity: () => undefined // ignore hostname mismatch
  });

  try {
    const response = await axios.get(
      "https://64.227.189.27/wallet/api/v1/transaction_history", // IP backend
      {
        headers: {
          Authorization: authHeader,   // pass Bearer token
          "Cache-Control": "no-cache",
        },
        params: { service_id, page },
        httpsAgent,
      }
    );

    // Forward backend response to React
    res.json(response.data);
  } catch (err) {
    console.error("Axios full error:", err.toJSON ? err.toJSON() : err);
    res.status(err.response?.status || 500).json({
      error: err.response?.data || err.message || "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
