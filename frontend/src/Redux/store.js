import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { authReducer } from "./auth/reducer";
import { todoReducer } from "./todoList/reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authStore:authReducer,
   todoStore:todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);