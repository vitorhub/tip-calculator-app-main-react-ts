import React from "react";
import { Provider } from "react-redux";
import Middle from "./Middle";
import store from "./store";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Middle/>
    </Provider>
  );
}

export default App;