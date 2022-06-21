import { Dispatch } from "react"
import { pizzasAPI } from "../../api/api"
import { CartActionTypes, ICart, IPizzaSort, PizzasAction, PizzasActionTypes } from "../../types/pizzaTypes"

export const SortPizzaByTypeAC = (index: number) => ({ type: PizzasActionTypes.SORT_PIZZA_BY_TYPE, payload: index });
export const getCartAC = (cart: ICart) => ({ type: CartActionTypes.FETCH_CART_SUCCESS_ACTION, payload: cart });

export const removeCartAC = (cart: any[]) => ({ type: CartActionTypes.REMOVE_CART_FROM_LS, payload: cart });

export const fetchPizzas = (category?: number | null, sort?: IPizzaSort | null) => {
	return async (dispatch: Dispatch<PizzasAction>) => {
		try {
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS })
			const response = await pizzasAPI.getPizzas(category, sort)
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS_SUCCESS, payload: response.data })
		} catch (e) {
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS_ERROR, payload: 'error' })
		}
	}
}


