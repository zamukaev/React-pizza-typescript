export enum PizzasActionTypes {
	FETCH_PIZZAS = 'FETCH_PIZZAS',
	FETCH_PIZZAS_SUCCESS = 'FETCH_PIZZAS_SUCCESS',
	FETCH_PIZZAS_ERROR = 'FETCH_PIZZAS_ERROR',
}



export interface IPizzas {
	id: number;
	articul: string;
	title: string;
	price: number;
	img: string;
	type: string[];
	size: number[];
	rating: number;
	categories: number;

}
interface PizzaState {
	pizzas: IPizzas[];
	isLoading: boolean;
	error: null | string;
}
interface FetchPizzas {
	type: PizzasActionTypes.FETCH_PIZZAS;
}
interface FetchPizzasSuccess {
	type: PizzasActionTypes.FETCH_PIZZAS_SUCCESS;
	payload: IPizzas[]
}
interface FetchPizzasError {
	type: PizzasActionTypes.FETCH_PIZZAS_ERROR;
	payload: string;
}
export type PizzasAction = FetchPizzas | FetchPizzasSuccess | FetchPizzasError;

const initialState: PizzaState = {
	pizzas: [],
	isLoading: false,
	error: null,
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