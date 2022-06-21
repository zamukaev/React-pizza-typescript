import { CartAction, CartActionTypes, CartState, ICart } from "../../types/pizzaTypes";

const initialState: CartState = {
	cart: [],
	isLoading: false,
	error: null,
	totalPrice: 0,
	totalCount: 0,

}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.FETCH_CART_ACTION:
			return {
				...state, isLoading: true, error: null,
			}
		case CartActionTypes.FETCH_CART_SUCCESS_ACTION:
			let counter = 0;

			let totPrice = 0;
			action.payload.forEach((item: ICart) => {
				counter += item.count;
				totPrice += item.totalPrice;
			})
			return {
				...state, isLoading: false, error: null, cart: [...action.payload], totalCount: counter, totalPrice: totPrice
			}
		case CartActionTypes.REMOVE_CART_FROM_LS:
			return {
				...state, isLoading: false, error: null, cart: [...action.payload], totalCount: 0, totalPrice: 0,
			}
		case CartActionTypes.FETCH_CART_ERROR_ACTION:
			return {
				...state, isLoading: false, error: action.payload
			}
		default: return state;
	}
}
export default cartReducer;