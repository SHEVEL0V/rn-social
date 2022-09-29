/** @format */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { uploadImage } from "../../firebase/operationsStore";
import { signap, login, authentication, updateUserProfile, out } from "./slice";

//-------------------------------------------------------------------------
export const signUpUser =
  ({ email, password, name, photoUri }) =>
  async (dispatch, getState) => {
    try {
      const photoURL = await uploadImage(photoUri);
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      await updateProfile(user, { displayName: name, photoURL });
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
export const updateUserAvatar = (file) => async (dispatch, getState) => {
  const photo = await uploadImage(file);
  await updateProfile(auth.currentUser, {
    photoURL: photo,
  });
  const { displayName, photoURL, email, uid } = auth.currentUser;
  dispatch(updateUserProfile({ user: { displayName, photoURL, email, uid } }));
  console.log("updateAvatar ok");
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
