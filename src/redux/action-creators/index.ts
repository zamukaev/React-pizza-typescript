import { Dispatch } from "react"
import { pizzasAPI } from "../../api/api"
import { IPizzas, PizzasAction, PizzasActionTypes } from "../reducers/pizzaReducer"

// const fetchPizzasCA = () => ({ type: PizzasActionTypes.FETCH_PIZZAS })
// const fetchPizzasSuccessCA = (pizzas: IPizzas[]) => ({ type: PizzasActionTypes.FETCH_PIZZAS_SUCCESS, payload: pizzas })
// const fetchPizzasErrorCA = (error: string) => ({ type: PizzasActionTypes.FETCH_PIZZAS_ERROR, payload: error })

export const fetchPizzas = () => {
	return async (dispatch: Dispatch<PizzasAction>) => {
		try {
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS })
			const response = await pizzasAPI.getPizzas()
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS_SUCCESS, payload: response.data })
		} catch (e) {
			dispatch({ type: PizzasActionTypes.FETCH_PIZZAS_ERROR, payload: 'error' })
		}
	}
}