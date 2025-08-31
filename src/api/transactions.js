// api/transactions.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Get query parameters
    const { service_id, page } = req.query;

    // Call your backend API or database
    const response = await axios.get(
      `https://64.227.189.27/wallet/api/v1/transaction_history`,
      {
        params: { service_id, page },
      }
    );

    // Return the data
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
}
