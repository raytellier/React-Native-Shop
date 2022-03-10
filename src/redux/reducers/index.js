import { combineReducers } from "redux";
import { auth } from "./auth";
import { products } from "./products";

const Reducers = combineReducers({ auth, products });

export default Reducers;
