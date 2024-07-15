# Real-Time Price Tracker

## Overview

Real-Time Price Tracker is a web application designed to track real-time prices of cryptocurrencies and stocks. It utilizes Coingecko APIs to fetch stock/crypto prices. The application fetches data from a local API endpoint and displays the latest price records in an intuitive user interface. Additionally, it includes a pollingService that runs every 3 minutes to fetch and store the latest prices of 5 selected stock/crypto entries in MongoDB. Another API endpoint fetches the most recent 20 entries from MongoDB for specific stock/crypto prices.

### Features

- Track real-time prices of cryptocurrencies and stocks.
- Fetch data using Coingecko APIs.
- Store latest price records in MongoDB using pollingService.
- Display most recent 20 entries for specific stock/crypto prices.

## Getting Started

To get started with Real-Time Price Tracker, follow these steps:

### Installation

1. Clone the repository:

   git clone https://github.com/ishasinghh/Real-time-price-tracker.git

   cd real-time-price-tracker

   cd backend

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The application will run on [http://localhost:3000](http://localhost:3000).

## Supported Symbols

- `bitcoin` (Bitcoin)
- `ethereum` (Ethereum)
- `dogecoin` (Dogecoin)
- `aapl` (Apple Inc.)
- `tether` (Tether)

## API Endpoint

To fetch specific crypto/stock price data, use the following endpoint:

[http://localhost:3000/v1/price/:symbol](http://localhost:3000/v1/price/:symbol)

Replace `:symbol` with the desired symbol from the supported symbols list.

### Example API Request and Response

### Request

**URL:** `http://localhost:3000/v1/price/bitcoin`
**Method:** `GET`

### Response

```json
[
  {
    "_id": "66951b7d1e59dd402774463f",
    "symbol": "BITCOIN",
    "price": 62704,
    "timestamp": "2024-07-15T12:52:13.240Z",
    "__v": 0
  },
  {
    "_id": "66951b34a34200074ba571cb",
    "symbol": "BITCOIN",
    "price": 62704,
    "timestamp": "2024-07-15T12:51:00.620Z",
    "__v": 0
  },
  {
    "_id": "66951adca34200074ba571c5",
    "symbol": "BITCOIN",
    "price": 62704,
    "timestamp": "2024-07-15T12:49:32.220Z",
    "__v": 0
  },
  {
    "_id": "6694ffc35c9e143eea97d5c5",
    "symbol": "BITCOIN",
    "price": 62619,
    "timestamp": "2024-07-15T10:53:55.651Z",
    "__v": 0
  },
  {
    "_id": "6694ff15ccd504f1abb05f73",
    "symbol": "BITCOIN",
    "price": 62722,
    "timestamp": "2024-07-15T10:51:01.415Z",
    "__v": 0
  },
  {
    "_id": "6694fe61ed93f4599cf27b3a",
    "symbol": "BITCOIN",
    "price": 62722,
    "timestamp": "2024-07-15T10:48:01.357Z",
    "__v": 0
  },
  {
    "_id": "6694fdad69ce59be405fea24",
    "symbol": "BITCOIN",
    "price": 62743,
    "timestamp": "2024-07-15T10:45:01.447Z",
    "__v": 0
  },
  {
    "_id": "6694fd045cbe225857903ad7",
    "symbol": "BITCOIN",
    "price": 62743,
    "timestamp": "2024-07-15T10:42:12.640Z",
    "__v": 0
  },
  {
    "_id": "6694fc4ee0ae7ce8b5bc0517",
    "symbol": "BITCOIN",
    "price": 62754,
    "timestamp": "2024-07-15T10:39:10.232Z",
    "__v": 0
  },
  {
    "_id": "6694fb91b5999a302196ce54",
    "symbol": "BITCOIN",
    "price": 62754,
    "timestamp": "2024-07-15T10:36:01.423Z",
    "__v": 0
  },
  {
    "_id": "6694fa2947c02f21c5680fd0",
    "symbol": "BITCOIN",
    "price": 62728,
    "timestamp": "2024-07-15T10:30:01.445Z",
    "__v": 0
  },
  {
    "_id": "6694f9752704d82a4f0dcc08",
    "symbol": "BITCOIN",
    "price": 62728,
    "timestamp": "2024-07-15T10:27:01.934Z",
    "__v": 0
  },
  {
    "_id": "6694f8c02704d82a4f0dcbf8",
    "symbol": "BITCOIN",
    "price": 62726,
    "timestamp": "2024-07-15T10:24:00.932Z",
    "__v": 0
  },
  {
    "_id": "6694f85c2704d82a4f0dcbf2",
    "symbol": "BITCOIN",
    "price": 62726,
    "timestamp": "2024-07-15T10:22:20.622Z",
    "__v": 0
  },
  {
    "_id": "6694f80d41058306f3d23de4",
    "symbol": "BITCOIN",
    "price": 62726,
    "timestamp": "2024-07-15T10:21:01.180Z",
    "__v": 0
  },
  {
    "_id": "6694f75841058306f3d23dd8",
    "symbol": "BITCOIN",
    "price": 62661,
    "timestamp": "2024-07-15T10:18:00.691Z",
    "__v": 0
  },
  {
    "_id": "6694f6a641058306f3d23dd6",
    "symbol": "BITCOIN",
    "price": 62661,
    "timestamp": "2024-07-15T10:15:02.734Z",
    "__v": 0
  },
  {
    "_id": "6694f5f041058306f3d23dc4",
    "symbol": "BITCOIN",
    "price": 62752,
    "timestamp": "2024-07-15T10:12:00.592Z",
    "__v": 0
  },
  {
    "_id": "6694f54441058306f3d23dbc",
    "symbol": "BITCOIN",
    "price": 62752,
    "timestamp": "2024-07-15T10:09:08.740Z",
    "__v": 0
  }
]
```
