import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import pizzaReducer from "./reducers/pizzaReducer";

export const rootReducer = combineReducers({
	pizza: pizzaReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>