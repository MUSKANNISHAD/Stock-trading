# Contributing

Thanks for your interest in contributing to Stock Trading Dashboard! Contributions that fix bugs, improve the user experience, strengthen tests, or improve documentation are welcome.

## Getting started

1. Fork this repository.
2. Clone your fork and enter the project directory:
   ```bash
   git clone https://github.com/<your-username>/Stock-trading.git
   cd Stock-trading
   ```
3. Create a branch for your change:
   ```bash
   git checkout -b <type>/<short-description>
   ```
4. Install dependencies and configure the application(s) you plan to work on, following the sections below.

The repository contains two Vite frontend applications (`Dashboard` and `Frontend`) and a Node.js backend. Run each application from its own directory.

## Backend

From the repository root:

```bash
cd backend
npm install
```

Create `backend/.env` with your local configuration:

```env
PORT=3000
MONGO_URL=mongodb://127.0.0.1:27017/stock-trading
JWT_SECRET=your_secure_jwt_secret
```

Start the backend:

```bash
npm start
```

The backend is available at `http://localhost:3000` by default. Use your own MongoDB connection string and a secure, local JWT secret.

## Dashboard

From the repository root:

```bash
cd Dashboard
npm install
```

If the Dashboard needs to connect to a locally running backend, create `Dashboard/.env`:

```env
VITE_API_URL=http://localhost:3000
```

Available commands (defined in `Dashboard/package.json`):

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the Dashboard for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Frontend

From the repository root:

```bash
cd Frontend
npm install
```

The Frontend reads its API base URL from `import.meta.env.VITE_API_URL`. Create a separate `Frontend/.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Set this value to the URL where your backend is running. Vite loads environment variables from the app's own directory, so configuring `Dashboard/.env` does not configure the Frontend.

Available commands (defined in `Frontend/package.json`):

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the Frontend for production |
| `npm test` | Run the Vitest test suite |
| `npm test -- --run` | Run Vitest once without watch mode |
| `npm run preview` | Preview the production build locally |

## Before opening a pull request

- Run the relevant build, lint, and test commands for the application(s) you changed.
- Keep changes focused and follow the existing code style.
- Do not commit `.env` files, credentials, API keys, or other secrets.
- Update documentation when your change affects setup or usage.
- Include a clear description of the problem and solution in your pull request, and link any related issue.

Thank you for helping improve the project!