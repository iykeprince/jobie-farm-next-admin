import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import MobileTransactions from "./MobileTransactions";
import Search from "./Search/Search";
import TransactionItem from "./TransactionItem";
import classes from "./Transactions.module.css";

const AllTransactions = () => {
  const { transactions } = useSelector((state) => state.products);
  const [start, setStart] = useState(0);
  const TRANSACTIONS_PER_PAGE = 2;
  const end = start + TRANSACTIONS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * TRANSACTIONS_PER_PAGE - TRANSACTIONS_PER_PAGE);
  };
  return (
    <section>
      <h3 className={classes.h3}>All Transactions</h3>
      <div>
        <Search />
      </div>
      <div className={`${classes.desktop}`}>
        <table className={`${classes.table}`}>
          <thead>
            <tr className={classes.tr}>
              <th className={classes.th}>Date</th>
              <th className={classes.th}>Email</th>
              <th className={classes.th}>Phone Number</th>
              <th className={classes.th}>Amount</th>
              <th className={classes.th}>Status</th>
              <th className={classes.th}>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.slice(start, end).map((item) => (
              <TransactionItem key={item.id} details={item} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile} ${classes.ul}`}>
        {transactions?.slice(start, end).map((item) => (
          <MobileTransactions key={item.id} details={item} />
        ))}
      </ul>
      {transactions.length > 0 && (
        <Pagination
          totalProducts={transactions.length}
          productsPerPage={TRANSACTIONS_PER_PAGE}
          onChange={getPageHandler}
        />
      )}
    </section>
  );
};
export default AllTransactions;
