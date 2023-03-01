import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../../../store/Products/ProductsSlice";
import Button from "../../../UI/Button";
import Input from "./Input";
import classes from "./Search.module.css";

const Search = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (event) => {
    event.preventDefault();
    const startDate = new Date(from);
    const endDate = new Date(to);
    dispatch(
      ProductsActions.filterByDate({
        startDate: startDate,
        endDate: endDate,
      })
    );
  };

  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <div>
        <Input
          type="date"
          label="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
      </div>
      <div>
        <Input
          type="date"
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
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
