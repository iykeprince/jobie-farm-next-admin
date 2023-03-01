import { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import MobileUserItem from "./MobileUserItem";
import Search from "./Search/Search";
import UserItem from "./UserItem";
import classes from "./User.module.css";

const AllUsers = () => {
  const { users, filteredUsers, noUser } = useSelector(
    (state) => state.products
  );
  const [start, setStart] = useState(0);
  const USERS_PER_PAGE = 2;
  const end = start + USERS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * USERS_PER_PAGE - USERS_PER_PAGE);
  };
  const usersArr = filteredUsers.length > 0 ? filteredUsers : users;
  return (
    <section className={classes.shop}>
      <div className={classes.top}>
        <h2 className={classes.heading}>All Users</h2>
        <div className={classes.search__box}>
          <Search />
        </div>
      </div>
      <div className={`${classes.desktop}`}>
        {!noUser ? (
          <table className={`${classes.table}`}>
            <thead>
              <tr className={classes.tr}>
                <th className={classes.th}>First Name</th>
                <th className={classes.th}>Last Name</th>
                <th className={classes.th}>Email</th>
                <th className={classes.th}>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {usersArr?.slice(start, end).map((item) => (
                <UserItem key={item.id} details={item} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className={classes.no__user}>No user matched the search term!</p>
        )}
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile} ${classes.ul}`}>
        {!noUser ? (
          usersArr
            ?.slice(start, end)
            .map((item) => <MobileUserItem key={item.id} details={item} />)
        ) : (
          <p className={classes.no__user}>No user matched the search term!</p>
        )}
      </ul>
      {!noUser && usersArr.length > 0 && (
        <Pagination
          totalProducts={usersArr.length}
          productsPerPage={USERS_PER_PAGE}
          onChange={getPageHandler}
        />
      )}
    </section>
  );
};
export default AllUsers;
