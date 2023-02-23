import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import MobileUserItem from "./MobileUserItem";
import Search from "./Search/Search";
import UserItem from "./UserItem";
import classes from "./User.module.css";

const AllUsers = () => {
  const { users } = useSelector((state) => state.products);
  const [start, setStart] = useState(0);
  const USERS_PER_PAGE = 2;
  const end = start + USERS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * USERS_PER_PAGE - USERS_PER_PAGE);
  };
  return (
    <section className={classes.shop}>
      <div className={classes.top}>
        <h2 className={classes.heading}>All Users</h2>
        <div className={classes.search__box}>
          <Search />
        </div>
      </div>
      <div className={`${classes.desktop}`}>
        <table className={`${classes.table}`}>
          <thead>
            <tr className={classes.tr}>
              <th className={classes.th}>Last Name</th>
              <th className={classes.th}> First Name</th>
              <th className={classes.th}>Email</th>
              <th className={classes.th}>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users?.slice(start, end).map((item) => (
              <UserItem key={item.id} details={item} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile} ${classes.ul}`}>
        {users?.slice(start, end).map((item) => (
          <MobileUserItem key={item.id} details={item} />
        ))}
      </ul>
      {users.length > 0 && (
        <Pagination
          totalProducts={users.length}
          productsPerPage={USERS_PER_PAGE}
          onChange={getPageHandler}
        />
      )}
    </section>
  );
};
export default AllUsers;
