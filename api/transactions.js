// api/transactions.js
import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export default async function handler(req, res) {
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
        httpsAgent
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Serverless function error:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data || error.message || "Something went wrong",
    });
  }
}
