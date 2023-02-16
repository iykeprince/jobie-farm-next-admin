import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";

import classes from "../../styles/Cart.module.css";
const ProductsItem = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  const addCartItem = async () => {
    dispatch(
      ProductsActions.addCartItem({
        id,
        title,
        image,
        price,
        amount: 1,
      })
    );
  };

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <div className="product-item-2">
        <div className="product-inner">
          <div className="product-thumb">
            <Image src={image} alt="product" width={250} height={100} />
          </div>
          <div className="product-content">
            <a href="#">
              <h6>{title}</h6>
            </a>
            <div className="rating">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <h6 className="price">${price}</h6>
            <div
              className={`${classes.add__btn} cart-option`}
              onClick={addCartItem}
            >
              <div className="lab-btn">
                <span>Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
