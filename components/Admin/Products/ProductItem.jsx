import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import Image from "next/image";
import Button from "../../UI/Button";

import classes from "../../../styles/Cart.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { ProductsActions } from "../../../store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
const ProductsItem = ({ id, title, image, price, quantity }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(false);

  const editHandler = () => {
    localStorage.setItem(
      "selectedProduct",
      JSON.stringify({
        id,
        title,
        price,
        image,
        quantity,
      })
    );
    router.push("/products/addproduct");
  };
  const deleteHandler = async () => {
    // Deleting a product
    const docRef = doc(db, "products", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });

    // Re-fetching updated products
    const colRef = collection(db, "products");
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    dispatch(ProductsActions.addProducts({ products: docs }));
  };

  return (
    <div
      className={`col-xl-3 col-lg-4 col-sm-6 col-12 `}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="product-item-2">
        <div className="product-inner">
          <div className="product-thumb">
            <Image src={image} alt="product" width={250} height={100} />
          </div>
          <div className="product-content">
            <a href="#">
              <h6>{title}</h6>
            </a>
            <h6 className="price">&#8358;{price}</h6>
            <h6 className="price">Quantity: {quantity}</h6>
            {showButton && (
              <div className={`${classes.btn__box}`}>
                <Button
                  id="btn__submit"
                  type="button"
                  className={classes.button}
                  onClick={editHandler}
                >
                  Edit
                </Button>
                <Button
                  id="btn__submit"
                  type="button"
                  className={classes.button}
                  onClick={deleteHandler}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
