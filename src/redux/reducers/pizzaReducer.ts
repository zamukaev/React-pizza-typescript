import { PizzasAction, PizzasActionTypes, PizzaState } from "../../types/pizzaTypes"

const initialState: PizzaState = {
	pizzas: [],
	isLoading: false,
	error: null,
	sortPizza: []
}

const pizzaReducer = (state = initialState, action: PizzasAction): PizzaState => {
	switch (action.type) {
		case PizzasActionTypes.FETCH_PIZZAS:
			return {
				...state, isLoading: true, error: null
			}
		case PizzasActionTypes.FETCH_PIZZAS_SUCCESS:
			return {
				...state, isLoading: false, pizzas: action.payload, error: null
			}
		case PizzasActionTypes.FETCH_PIZZAS_ERROR:
			return {
				...state, isLoading: false, error: action.payload
			}

		default: return state
	}

}
export default pizzaReducer;
