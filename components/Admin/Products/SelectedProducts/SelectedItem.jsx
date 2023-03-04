import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";

import Image from "next/image";
import Button from "../../../UI/Button";

import { useRouter } from "next/router";
import { ProductsActions } from "../../../../store/Products/ProductsSlice";
import { useDispatch } from "react-redux";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import classes from "./SelectedProducts.module.css";

const SelectedItem = ({ id, title, image, price, quantity }) => {
  const router = useRouter();
  const dispatch = useDispatch();

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
    <>
      <tr className={classes.tr}>
        <td className={classes.image}>
          <Image src={image} width={60} height={10} alt={title} />
        </td>
        <td className={classes.td}>{title}</td>
        <td className={classes.td}>{quantity} </td>
        <td className={classes.td}>&#8358;{price}</td>
        <td className={classes.td}>
          <div className={`${classes.btn__box}`}>
            <Button
              id="btn__submit"
              type="button"
              className={classes.button}
              onClick={editHandler}
            >
              <AiOutlineEdit />
            </Button>
            <Button
              id="btn__submit"
              type="button"
              className={classes.button}
              onClick={deleteHandler}
            >
              <AiOutlineDelete />
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};
export default SelectedItem;
