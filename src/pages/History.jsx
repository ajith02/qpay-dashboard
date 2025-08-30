import Header from "../components/history/Header";
import NotificationBar from "../components/history/NotificationBar";
import TransactionTable from "../components/history/TransactionTable";

const History = () => {
  return (
    <div>
      <Header />
      <NotificationBar />
       <TransactionTable />
    </div>
  );
};

export default History;
