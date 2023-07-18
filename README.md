# Personal Budget API

## Overview

The Personal Budget API allows users to create and manage a personal budget using the envelope budgeting principles. Users can create budget envelopes, track envelope balances, transfer budgets between envelopes, and more.

## Installation

1. Clone this repository to your local machine.
2. Install Node.js and npm (Node Package Manager) if you haven't already.
3. Navigate to the project directory in your terminal.
4. Install dependencies with the following command: npm install

## Usage

1. Start the API server by running the following command: node index.js

The server will start, and the API will be accessible at http://localhost:3000.

2. API Endpoints:

- **Create Envelope:** POST `http://localhost:3000/envelopes`
- **Retrieve All Envelopes:** GET `http://localhost:3000/envelopes`
- **Retrieve Specific Envelope:** GET `http://localhost:3000/envelopes/:id`
- **Update Envelope and Balance:** PUT `http://localhost:3000/envelopes/:id`
- **Delete Envelope:** DELETE `http://localhost:3000/envelopes/:id`
- **Transfer Budgets Between Envelopes:** POST `http://localhost:3000/envelopes/transfer/:from/:to`

3. Make API requests using a tool like Postman or your preferred API client.

## License

This project is licensed under the [MIT License](LICENSE).

Happy budgeting!