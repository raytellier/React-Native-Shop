import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth
} from "firebase/auth";


import { getFirestore } from "firebase/firestore";


import { doc, onSnapshot } from "firebase/firestore";

import { USER_STATE_CHANGE } from "../constants";

const auth = getAuth();
const firestore = getFirestore();

export const userAuthStateListener = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(getCurrentUserData());
    } else {
      dispatch({ type: USER_STATE_CHANGE, currentUser: null, loaded: true });
    }
  });
};

export const getCurrentUserData = () => {
  onSnapshot(doc(firestore, "users", auth.currentUser.uid), (res) => {
    if (res.exists) {
      return dispatch({
        type: USER_STATE_CHANGE,
        currentUser: res.data(),
        loaded: true,
      });
    }
  });
};

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });

export const register = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve();
      })
      .catch(() => reject());
  });
