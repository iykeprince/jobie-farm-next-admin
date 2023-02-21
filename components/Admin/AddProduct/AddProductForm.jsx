import { useEffect, useState } from "react";

import Input from "./Input";
import Button from "../../UI/Button";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

import classes from "./AddProductForm.module.css";
const Form = ({ onSubmit, loading }) => {
  const [form, setForm] = useState({
    price: "",
    name: "",
    image: "",
    type: "",
    id: "",
    quantity: "",
  });
  useEffect(() => {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    setForm({
      price: "" + selectedProduct?.price,
      name: selectedProduct?.title,
      image: selectedProduct?.image,
      id: selectedProduct?.id,
      quantity: selectedProduct?.quantity,
      type: selectedProduct?.type ? type : "Chicken",
    });
    setTimeout(() => {
      localStorage.removeItem("selectedProduct");
    }, 1000);
  }, []);
  const priceOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, price: e.target.value };
    });
  };

  const nameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const imageOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, image: e.target.value };
    });
  };
  const typeOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, type: e.target.value };
    });
  };
  const quantityOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, quantity: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);

    // Send form details to parent component
    onSubmit({
      price: form.price,
      name: form.name,
      image: form.image,
      type: form.type,
      quantity: form.quantity,
      id: form.id ? form.id : null,
    });
  };

  return (
    <form className={classes.addproduct__form} onSubmit={submitHandler}>
      <div>
        <label className={classes.select__label}>
          Select Product Type:
          <select
            value={form.type}
            onChange={typeOnChangeHandler}
            className={classes.select}
          >
            <option value="Egg">Egg</option>
            <option value="Chicken">Chicken</option>
          </select>
        </label>
      </div>
      <Input
        id="name"
        label="Name"
        type="text"
        required
        placeholder="Enter product name"
        value={form.name}
        onChange={nameOnChangeHandler}
      />
      <Input
        id="price"
        label="Price"
        type="number"
        required
        placeholder="Enter product price"
        value={form.price}
        onChange={priceOnChangeHandler}
      />{" "}
      <Input
        id="quantity"
        label="Quantity"
        type="number"
        required
        placeholder="Enter product quantity"
        value={form.quantity}
        onChange={quantityOnChangeHandler}
      />
      <Input
        id="image"
        label="Image"
        type="text"
        required
        placeholder="Add image URL"
        value={form.image}
        onChange={imageOnChangeHandler}
      />
      <div className={classes.btn__box}>
        <Button
          disabled={loading}
          id="btn__submit"
          type="submit"
          className={classes.button}
        >
          {loading ? <LoadingSpinner /> : "Submit"}
        </Button>
      </div>
    </form>
  );
};
export default Form;
