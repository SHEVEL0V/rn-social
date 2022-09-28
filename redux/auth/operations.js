/** @format */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { signap, login, authentication, out } from "./slice";

//-------------------------------------------------------------------------
export const signUpUser =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: name });
      dispatch(signap({ isAuth: true }));
    } catch (err) {
      dispatch(signap(false));
    }
  };

//-------------------------------------------------------------------------
export const signInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      const { displayName, photoURL, email, uid } = user;
      dispatch(
        login({ isAuth: true, user: { displayName, photoURL, email, uid } })
      );
    });
  };

//-------------------------------------------------------------------------
export const authUser = () => (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { displayName, photoURL, email, uid } = user;
      dispatch(
        authentication({
          isAuth: true,
          user: { displayName, photoURL, email, uid },
        })
      );
    }
  });
};

//-------------------------------------------------------------------------
export const outUser = () => async (dispatch, getState) => {
  signOut(auth)
    .then(() => {
      dispatch(out());
      console.log("out Ok");
    })
    .catch((error) => {
      console.log("error out");
    });
};
