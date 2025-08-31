import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import { TransactionProvider } from "../contexts/TransactionContext";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const QrPage = lazy(() => import("../pages/QrPage"));
const History = lazy(() => import("../pages/History"));
const Profile = lazy(() => import("../pages/Profile"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Dashboard...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/qr"
          element={
            <Suspense fallback={<div>Loading QR Page...</div>}>
              <QrPage />
            </Suspense>
          }
        />
        <Route
          path="/history"
          element={
            <Suspense fallback={<div>Loading History...</div>}>
              <TransactionProvider>
                <History />
              </TransactionProvider>
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading Profile...</div>}>
              <Profile />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
