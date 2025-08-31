import { lazy, Suspense } from "react";

import Header from "../components/history/Header";
import NotificationBar from "../components/history/NotificationBar";
const TransactionTable = lazy(() => import("../components/history/TransactionTable"));


const History = () => {
  return (
    <>
      <Header />
      <NotificationBar />
      <Suspense fallback={<div>Loading transactions...</div>}>
        <TransactionTable />
      </Suspense>
    </>
  );
};

export default History;
