import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../db/Firebase"

const DOC_NAME = "Product";
const productsCollection = collection(db, DOC_NAME);

class ProductService {
  addProducts = (newProduct) => addDoc(productsCollection, newProduct);

  updateProduct = (id, updatedProduct) => {
    const productDoc = doc(db, DOC_NAME, id);
    return updateDoc(productDoc, updatedProduct);
  };

  deleteProduct = (id) => {
    const productDoc = doc(db, DOC_NAME, id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(productsCollection);
  };

  getProduct = (id) => {
    const productDoc = doc(db, DOC_NAME, id);
    return getDoc(productDoc);
  };
}

export default new ProductService();
