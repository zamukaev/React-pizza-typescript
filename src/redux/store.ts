import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import pizzaReducer from "./reducers/pizzaReducer";

export const rootReducer = combineReducers({
	pizza: pizzaReducer,
	cart: cartReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>