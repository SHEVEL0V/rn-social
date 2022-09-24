/** @format */
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";

export const signupUser = createAsyncThunk(
  "signupUser",
  async ({ email, password, name }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: name });
    } catch (err) {
      throw new Error(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async ({ email, password }) => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  }
);

export const outUser = createAsyncThunk("outUser", async () => {
  signOut(auth)
    .then(() => {
      console.log("out Ok");
    })
    .catch((error) => {
      console.log("error out");
    });
});
