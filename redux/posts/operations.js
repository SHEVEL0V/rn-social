/** @format */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  where,
  query,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { firebaseConfig } from "../../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import { setPost, setComment } from "./slice";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const uid = auth.currentUser?.uid;

//--------------------------------------------------------------
export const getUserComment = (id) => async (dispatch, getState) => {
  const query = await getDoc(doc(db, "posts", id));

  if (query.exists()) {
    dispatch(setComment(query.data()));
    console.log("getUserComment ok");
  }
};

//--------------------------------------------------------------
export const writeUserComment =
  ({ id, data, value }) =>
  async (dispatch, getState) => {
    await setDoc(
      doc(db, "posts", id),
      {
        comments: [...data, { date: Date.now(), value }],
      },
      { merge: true }
    );
    console.log("writeUserComment ok");
  };

//--------------------------------------------------------------
export const addUserPost =
  (namePhoto, nameLocation, location = "") =>
  async (dispatch, getState) => {
    const uid = auth.currentUser?.uid;
    await addDoc(collection(db, "posts"), {
      uid,
      namePhoto,
      nameLocation,
      location,
      comments: [],
    });
    console.log("addUserPost ok");
  };

//--------------------------------------------------------------
export const getUserPost = () => async (dispatch, getState) => {
  const uid = auth.currentUser?.uid;
  // const uid = getState((store) => store.userAuth.user.uid);
  const data = [];
  const q = query(collection(db, "posts"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  console.log("get posts ok");
  dispatch(setPost(data));
};