import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useRouter } from "next/router";
import { useState } from "react";

import Form from "./AddProductForm";

import classes from "./AddProduct.module.css";
import { AiOutlineRollback } from "react-icons/ai";
const AddProduct = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const addProductHandler = async (formData) => {
    console.log(formData);
    try {
      setPending(true);
      // Checking if the product exists
      if (formData.id) {
        const ref = doc(db, "products", formData.id);
        await updateDoc(ref, {
          image: formData.image,
          price: formData.price,
          title: formData.name,
          type: formData.type,
          quantity: formData.quantity,
        })
          .then(() => {
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      } else {
        // Add a new document with a generated id.
        const docRef = collection(db, "products");
        await addDoc(docRef, {
          image: formData.image,
          price: formData.price,
          title: formData.name,
          type: formData.type,
          quantity: formData.quantity,
        });
      }
      router.push("/products");
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className={classes.addproduct}>
        <AiOutlineRollback
          className={classes.icon}
          onClick={() => router.back()}
        />
        <h1 className={classes.h1}>Add a Product</h1>
        <Form onSubmit={addProductHandler} loading={pending} />
      </div>
    </>
  );
};

export default AddProduct;
