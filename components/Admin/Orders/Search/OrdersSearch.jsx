import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../../../store/Products/ProductsSlice";
import Button from "../../../UI/Button";
import classes from "./OrdersSearch.module.css";

const Search = () => {
  const [form, setForm] = useState({
    type: "All",
    order: "All",
    payment: "All",
  });

  const dispatch = useDispatch();
  const searchHandler = (event) => {
    event.preventDefault();

    const { type, order, payment } = form;
    dispatch(
      ProductsActions.filterOrders({
        type,
        order,
        payment,
      })
    );
  };

  const orderStatusOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, order: e.target.value };
    });
  };
  const typeOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, type: e.target.value };
    });
  };
  const paymentStatusOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, payment: e.target.value };
    });
  };

  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <div>
        <label className={classes.select__label}>
          Select Product Type:
          <select
            value={form.type}
            onChange={typeOnChangeHandler}
            className={classes.select}
          >
            <option value="All">All</option>
            <option value="Egg">Egg</option>
            <option value="Chicken">Chicken</option>
          </select>
        </label>
      </div>
      <div>
        <label className={classes.select__label}>
          Select Payment Status:
          <select
            value={form.payment}
            onChange={paymentStatusOnChangeHandler}
            className={classes.select}
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </label>
      </div>
      <div>
        <label className={classes.select__label}>
          Select Order Status:
          <select
            value={form.order}
            onChange={orderStatusOnChangeHandler}
            className={classes.select}
          >
            <option value="All">All</option>
            <option value="Not Delivered">Not Delivered</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </label>
      </div>

      <div>
        <Button type="submit" className={classes.button}>
          Filter
        </Button>
      </div>
    </form>
  );
};
export default Search;
