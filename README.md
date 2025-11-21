# 📡 IoT Heartbeat Hub

A lightweight Node.js + TypeScript service for tracking IoT device heartbeats and monitoring their online/offline status in real-time.

[![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ Features

- 🔄 Real-time device heartbeat tracking
- 📊 Automatic online/offline status detection (60s threshold)
- 💾 In-memory data storage (no database required)
- 🧪 Unit tests included
- 🚀 Simple REST API
- 📝 Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/luida01/iot-heartbeat-hub.git
cd iot-heartbeat-hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the server**
```bash
npm start
```

The server will run at `http://localhost:3000`

4. **Run the simulation (Optional)**

To verify the endpoints with a test script:
```bash
npx tsx src/simulate.ts
```

## 📚 API Endpoints

### 1. Register/Update Device Heartbeat

**POST** `/devices/heartbeat`

**Request Body:**
```json
{
  "deviceId": "device-001",
  "type": "SCREEN"
}
```

**Response:**
```json
{
  "deviceId": "device-001",
  "type": "SCREEN",
  "status": "ONLINE",
  "lastSeenAt": "2024-03-15T10:30:00.000Z"
}
```

**Behavior:**
- Creates device if it doesn't exist
- Updates `lastSeenAt` timestamp
- Returns device with current status

### 2. Get All Devices

**GET** `/devices`

**Response:**
```json
[
  {
    "deviceId": "device-001",
    "type": "SCREEN",
    "status": "ONLINE",
    "lastSeenAt": "2024-03-15T10:30:00.000Z"
  },
  {
    "deviceId": "device-002",
    "type": "SENSOR",
    "status": "OFFLINE",
    "lastSeenAt": "2024-03-15T10:25:00.000Z"
  }
]
```

**Status Logic:**
- **ONLINE**: Last heartbeat < 60 seconds ago
- **OFFLINE**: Last heartbeat ≥ 60 seconds ago OR never seen

### 3. Health Check

**GET** `/health`

**Response:**
```json
{
  "status": "ok"
}
```

## 📊 Status Detection Logic

**Rules:**
- `lastSeenAt = null` → **OFFLINE**
- Difference < 60 seconds → **ONLINE**
- Difference ≥ 60 seconds → **OFFLINE**

## 🧪 Running Tests

Execute the unit tests:

```bash
npm test
```

The test suite includes:
- ✅ Online status detection (< 60s)
- ✅ Offline status detection (≥ 60s)
- ✅ Null lastSeenAt handling

**Test frameworks supported:**
- Jest
- Vitest
- node:test

## 🛠️ Tech Stack

- **Runtime:** Node.js 18+
- **Language:** TypeScript 5.0+
- **Testing:** Jest / Vitest / node:test
- **HTTP Server:** Express.js (or native http)
- **Storage:** In-memory (no database)

## 👤 Author

**Luis Daniel Santana Mercado**

- GitHub: [@luida01](https://github.com/luida01)
- Email: luisdanielsantanamercado@gmail.com

---

⭐ If you found this project helpful, please give it a star!
