import axios from "axios";
import { ICart, IPizzaSort } from "../types/pizzaTypes";

const instance = axios.create({
	baseURL: 'https://61ccec9b198df60017aec280.mockapi.io/',
});

export const pizzasAPI = {
	getPizzas: (category: number | null | undefined, sort?: IPizzaSort | null) => {
		return instance.get(`pizzas?categories=${category || category === 0 ? category : ''}&sortBy=${sort?.type}&order=${sort?.order ? '' : 'desc'}`)
	},
}
