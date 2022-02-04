// Redux Imports
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";

// Import screens
import AuthScreen from "./src/screens/auth";

// Create redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}
