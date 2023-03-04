import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import MobileTransactions from "./MobileTransactions";
import Search from "./Search/Search";
import TransactionItem from "./TransactionItem";
import classes from "./Transactions.module.css";

const AllTransactions = () => {
  const { transactions, filteredTransactions, noTransaction } = useSelector(
    (state) => state.products
  );
  const transactionsArr =
    filteredTransactions.length > 0 ? filteredTransactions : transactions;

  const [start, setStart] = useState(0);
  const TRANSACTIONS_PER_PAGE = 2;
  const end = start + TRANSACTIONS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * TRANSACTIONS_PER_PAGE - TRANSACTIONS_PER_PAGE);
  };
  return (
    <section>
      <div className={classes.top}>
        <h3 className={classes.heading}>All Transactions</h3>
        <div className={classes.search__box}>
          <Search />
        </div>
      </div>

      <div className={`${classes.desktop}`}>
        {!noTransaction ? (
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
              {transactionsArr?.slice(start, end).map((item) => (
                <TransactionItem key={item.id} details={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className={classes.no__transaction}>
            No trasanction is within the range of the given date!
          </p>
        )}
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile} ${classes.ul}`}>
        {!noTransaction &&
          transactionsArr
            ?.slice(start, end)
            .map((item) => <MobileTransactions key={item.id} details={item} />)}
      </ul>
      {!noTransaction && transactionsArr.length > 0 && (
        <Pagination
          totalProducts={transactionsArr.length}
          productsPerPage={TRANSACTIONS_PER_PAGE}
          onChange={getPageHandler}
        />
      )}
    </section>
  );
};
export default AllTransactions;
