const express = require('express');
const app = express();

// Global variables to store information about envelopes and total budget
let envelopes = [];
let totalBudget = 0;

app.use(express.json()); // Middleware to parse JSON requests

// Endpoint to generate individual budget envelopes
app.post('/envelopes', (req, res) => {
  const { title, budget } = req.body;

  // Validate request body
  if (!title || !budget || typeof budget !== 'number' || budget <= 0) {
    return res.status(400).json({ error: 'Invalid request. Title and budget are required and budget must be a positive number.' });
  }

  // Create a new envelope object
  const envelope = {
    id: envelopes.length + 1,
    title,
    budget,
    balance: budget, // Initially, balance is the same as the budget
  };

  // Add the envelope to the envelopes array
  envelopes.push(envelope);

  // Update the total budget
  totalBudget += budget;

  // Return the newly created envelope as the response
  res.status(201).json(envelope);
});

// Endpoint to retrieve all envelopes
app.get('/envelopes', (req, res) => {
    res.json(envelopes);
});

// Endpoint to retrieve a specific envelope
app.get('/envelopes/:id', (req, res) => {
  const id = +req.params.id;

  // Find the envelope with the corresponding ID
  const envelope = envelopes.find((env) => env.id === id);

  // Check if the envelope exists
  if (!envelope) {
    return res.status(404).json({ error: 'Envelope not found.' });
  }

  // Return the envelope as the response
  res.json(envelope);
});

// Endpoint to update specific envelopes
app.put('/envelopes/:id', (req, res) => {
  const id = +req.params.id;
  const { amount, budget } = req.body;

  // Find the envelope with the corresponding ID
  const envelope = envelopes.find((env) => env.id === id);

  // Check if the envelope exists
  if (!envelope) {
    return res.status(404).json({ error: 'Envelope not found.' });
  }

  // Update the envelope's properties based on the request body
  if (typeof amount === 'number' && amount !== 0) {
    // Update the envelope balance based on the extracted amount
    envelope.balance -= amount;

    // Update the total budget accordingly
    totalBudget -= amount;
  }

  if (typeof budget === 'number' && budget >= 0) {
    // Update the envelope budget if provided in the request body
    envelope.budget = budget;
  }

  // Return the updated envelope as the response
  res.json(envelope);
});

// Root route to display the total budget
app.get('/', (req, res) => {
  res.send(`Total Budget: ${totalBudget}€`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
