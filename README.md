# 📊 Stock Trading Dashboard

> A full-stack stock trading simulation platform designed to help users monitor the market, manage their virtual portfolio, and track their investments.

**Watch the market. Track your positions. Understand your portfolio.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://stock-trading-nwil.vercel.app/)
[![React](https://img.shields.io/badge/Frontend-React-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)](https://www.mongodb.com/)

---

## ✨ Overview

Stock Trading Dashboard is a full-stack web application that simulates the experience of managing a personal stock portfolio.

The application provides a centralized interface for monitoring stocks, tracking holdings and positions, analyzing portfolio performance, and managing trading activity.

Whether you're checking your watchlist or reviewing your portfolio's performance, everything is accessible from one place.

## 🚀 Features

- **Dashboard:** Get an overview of your portfolio, investments, current value, and profit or loss.
- **Watchlist:** Monitor selected stocks and market indices.
- **Holdings:** View stocks held in your portfolio and track their performance.
- **Positions:** Monitor your active trading positions.
- **Portfolio Analytics:** Visualize investment performance through charts and data representations.
- **Trading Interface:** Interact with the simulated stock trading workflow.
- **Authentication:** User registration and login using JWT-based authentication and HTTP-only cookies.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite, JavaScript |
| UI | Material UI, Bootstrap, CSS |
| Routing | React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| Charts | Chart.js |
| Version Control | Git, GitHub |

## 📁 Project Structure

```text
Stock-trading/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── Dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── README.md
└── ...
```

## ⚙️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB (local instance or MongoDB Atlas)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/MUSKANNISHAD/Stock-trading.git

cd Stock-trading
```

### 2. Set up the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/stock-trading
JWT_SECRET=your_secure_jwt_secret
```

Replace the MongoDB connection string and JWT secret with your own values.

Start the backend server:

```bash
npm start
```

The backend server will run on:

`http://localhost:3000`

### 3. Set up the Dashboard

Open a new terminal and navigate to the Dashboard directory:

```bash
cd Dashboard
```

Install dependencies:

```bash
npm install
```

Create a `.env` file if required by the application:

```env
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

### 4. Set up the Frontend

To run the separate Frontend application, open another terminal:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the applications in separate terminals when working on the complete application flow.

## 🧪 Development Commands

### Backend

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm start` | Start backend using Nodemon |

### Dashboard

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions are welcome!

We appreciate developers who want to improve the project, fix bugs, enhance existing features, and introduce useful improvements.

To contribute:

1. Explore the repository and its open issues.
2. Comment on an issue describing your interest and proposed approach.
3. Wait for maintainer approval or assignment before starting substantial work.
4. Fork the repository.
5. Create a separate branch for your changes.
6. Implement and test your changes.
7. Submit a Pull Request referencing the relevant issue.

Please keep your contributions focused and provide a clear description of the changes in your Pull Request.

## 🔐 Security

Please do not report security vulnerabilities through public issues. Use the repository's security reporting instructions once published.

Never commit credentials, database connection strings, JWT secrets, or environment files.

## ⚠️ Disclaimer

This project is intended for educational purposes and stock trading simulation. It is not connected to a real brokerage account and does not execute actual stock market transactions. It should not be used as a source of financial advice.

## 📄 License

The project's license will be published after approval by the project maintainer. Refer to the repository's `LICENSE` file once available.

---

**Built with ❤️ by Muskan Kumari Nishad**

Contributions and suggestions are welcome!
