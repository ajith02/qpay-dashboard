import https from "https";
import axios from "axios";

export default async function handler(req, res) {
  const { service_id = 111, page = 0 } = req.query;
  const token = process.env.VITE_WALLET_TOKEN;

  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,   // bypass invalid SSL
    checkServerIdentity: () => undefined,
  });

  try {
    const response = await axios.get(
      "http://64.227.189.27/wallet/api/v1/transaction_history",
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { service_id, page },
        httpsAgent,
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      error: err.response?.data || err.message,
    });
  }
}
