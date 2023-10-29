import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db } from "./Firebase";
  
  const DOC_NAME = "Users";
  const usersCollection = collection(db, DOC_NAME);
  
  class UserService {
    addUsers = (newUser) => addDoc(usersCollection, newUser);
  
    updateUser = (id, updatedUser) => {
      const userDoc = doc(db, DOC_NAME, id);
      return updateDoc(userDoc, updatedUser);
    };
  
    deleteUser = (id) => {
      const userDoc = doc(db, DOC_NAME, id);
      return deleteDoc(userDoc);
    };
  
    getAllUsers = () => {
      return getDocs(usersCollection);
    };
  
    getUser = (id) => {
      const userDoc = doc(db, DOC_NAME, id);
      return getDoc(userDoc);
    };
  }
  
  export default new UserService();
  