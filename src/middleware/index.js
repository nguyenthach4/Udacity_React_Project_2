import { thunk } from "redux-thunk";
import logger from "./logger/logger";

export default function applyMiddleware() {
  return [thunk, logger];
}
