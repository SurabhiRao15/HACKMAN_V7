const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors'); 
const app = express();

app.use(cors());
// //


const port = 5000;

app.use(express.json());

app.post('/addtransactions', async (req, res) => {
  const { amount, type, description } = req.body;

  if (!amount || !type || !description) {
    return res.status(400).send('Amount, type, and description are required.');
  }

  const transactionData = {
    id: uuidv4(),
    amount,
    type,
    description,
    created_at: new Date().toISOString()
  };

  try {
    const response = await axios.post('http://localhost:3000/transactions', transactionData);
    res.status(200).send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while adding the transaction.' + error);
  }
});

// Endpoint to delete a transaction
app.delete('/deletetransaction/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.delete(`http://localhost:3000/transactions/${id}`);
    console.log('Response from json-server:', response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error deleting from json-server:', error.response ? error.response.data : error.message);
    res.status(500).send('An error occurred while deleting the transaction.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});