
import reducer from "../../reducers";
import middleware from "../../middleware";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: reducer,
    middleware: middleware,
  });

  export default store