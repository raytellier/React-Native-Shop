import { onSnapshot, collection, getDocs } from "firebase/firestore";
import { database } from "../../../config/firebase";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_STATE_CHANGE,
} from "../constants";

// This getProducts function is using onSnapshot to listen to data changes within the collection.
// Upside you can update products info on the fly, downside more reads thus more cost

// export const getProducts = () => (dispatch) => {
//   onSnapshot(collection(database, "products"), (res) => {
//     if (!res.empty) {
//       return dispatch({
//         type: PRODUCT_STATE_CHANGE,
//         products: res.docs.map(product => product.data()),
//         loaded: true,
//       });
//     }
//   });
// };

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const products = await getDocs(collection(database, "products"));

    dispatch({ type: PRODUCT_LIST_SUCCESS, products: products.docs.map(product => product.data()) });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
