import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import 'bootstrap/dist/css/bootstrap.min.css';

export default store = configureStore({
  reducer: reducer,
  middleware: middleware,
});

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
