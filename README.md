# QPay Dashboard

QPay Dashboard is a modern, responsive web application built with **React** and **Vite**. It leverages Material-UI for the frontend, Axios for API communication, and implements a modular architecture for maintainability and scalability. This README outlines setup instructions, architecture, and the overall app flow.

---

## 🚀 Setup Instructions

1. **Clone the repository**  

git clone https://github.com/ajith02/qpay-dashboard.git

npm install

npm run dev

## Architecture & Approach

    1. The QPay Dashboard is designed with modularity, reusability, and performance in mind:

    2. Frontend Framework: React 18 with Vite for fast HMR and optimized builds.

    3. UI Library: Material-UI (MUI v5) for responsive and customizable components.

    4. State Management: React Context API and custom hooks to manage global state.

    5. HTTP Client: Axios for API requests, including error handling.

    6. Code Quality: ESLint and Prettier for consistent code style. 

## QPay App Flow

The app flow is designed for smooth user experience and real-time interactions:

    1. Dashboard
        Displays an overview of transactions, settlements, and account summaries using cards, tables.

    2. Transactions
        Fetches transaction data from the backend via Axios.
        Skeleton loaders are shown during API calls for better UX

## NOTES:
    1. Fully responsive across devices (mobile, tablet, desktop)

    2. Components are reusable and follow Material-UI best practices

    3. Leverages Vite optimizations for faster builds