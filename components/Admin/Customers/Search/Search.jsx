import { useRef } from "react";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../../../store/Products/ProductsSlice";
import Button from "../../../UI/Button";
import classes from "./UserSearch.module.css";

const Search = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    event.preventDefault();
    const searchTerm = searchRef.current.value;
    dispatch(ProductsActions.searchUsers({ word: searchTerm }));
  };

  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <input
        id="search"
        placeholder="Search by last name"
        type="text"
        ref={searchRef}
        className={classes.input}
      />
      <Button type="submit" className={classes.button}>
        Search
      </Button>
    </form>
  );
};
export default Search;
