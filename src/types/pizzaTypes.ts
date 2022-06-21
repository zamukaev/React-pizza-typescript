//#############################pizza types##############################
export enum PizzasActionTypes {
	FETCH_PIZZAS = 'FETCH_PIZZAS',
	FETCH_PIZZAS_SUCCESS = 'FETCH_PIZZAS_SUCCESS',
	FETCH_PIZZAS_ERROR = 'FETCH_PIZZAS_ERROR',
	SORT_PIZZA_BY_TYPE = 'SORT_PIZZA_BY_TYPE',
}

export interface IPizzaSort {
	name: string;
	type: string
	order?: string
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

export interface PizzaState {
	pizzas: IPizzas[];
	isLoading: boolean;
	error: null | string;
	sortPizza: IPizzas[];
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

interface SortPizzaByType {
	type: PizzasActionTypes.SORT_PIZZA_BY_TYPE;
	payload: number;
}

export type PizzasAction = FetchPizzas | FetchPizzasSuccess | FetchPizzasError | SortPizzaByType;

//#############################cart types##############################
export enum CartActionTypes {
	FETCH_CART_ACTION = 'FETCH_CART_ACTION',
	REMOVE_CART_FROM_LS = 'REMOVE_CART_FROM_LS',
	FETCH_CART_SUCCESS_ACTION = 'FETCH_CART_SUCCESS_ACTION',
	FETCH_CART_ERROR_ACTION = 'FETCH_CART_ERROR_ACTION',
}
export interface ICart {
	id: number;
	articul: string;
	title: string;
	img: string;
	price: number;
	type: string;
	size: number;
	count: number;
	totalPrice: number;
}
export interface CartState {
	cart: ICart[];
	isLoading: boolean;
	error: string | null;
	totalPrice: number;
	totalCount: number;
}

interface FetchCartAction {
	type: CartActionTypes.FETCH_CART_ACTION;
}
interface RemoveCartFromLS {
	type: CartActionTypes.REMOVE_CART_FROM_LS;
	payload: any[];
}

interface FetchCartSuccessAction {
	type: CartActionTypes.FETCH_CART_SUCCESS_ACTION;
	payload: ICart[];
}

interface FetchCartErrorAction {
	type: CartActionTypes.FETCH_CART_ERROR_ACTION;
	payload: string | null;
}

export type CartAction = RemoveCartFromLS | FetchCartSuccessAction | FetchCartErrorAction | FetchCartAction;



