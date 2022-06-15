import axios from "axios";

const instance = axios.create({
	baseURL: 'https://61ccec9b198df60017aec280.mockapi.io/',

});

export const pizzasAPI = {
	getPizzas: () => {
		return instance.get('pizzas')
	}
}