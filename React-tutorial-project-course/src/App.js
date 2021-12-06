import React from "react";
import { Provider } from "react-redux";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff
//store -stores data,think of state
//reducer - function that are use to update store
import {createStore} from 'redux'
import reducer from './reducer'


//initial store
const initialStore = {
  cart : cartItems,
  total : 105,
  totalNoOfCartItem : 5,
}

//store
const store = createStore(reducer,initialStore)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer/>
    </Provider>
  );
}

export default App;
