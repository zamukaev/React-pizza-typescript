import { ICart } from "../types/pizzaTypes";

export const addToLC = (cart: ICart) => {
	let old = [];
	if (localStorage.getItem("cart")) {
		old = JSON.parse(localStorage.getItem("cart") || "");
	} else {
		localStorage.setItem("cart", JSON.stringify([cart]))
	}
	if (old.some((e: any) => e.articul === cart.articul)) {
		let old2 = old.filter((item: ICart) => {
			if (item.articul === cart.articul) {
				item.count += 1;
				item.totalPrice += item.price
			}
			return true
		});

		localStorage.setItem("cart", JSON.stringify([...old2]));
	} else {
		localStorage.setItem('cart', JSON.stringify([...old, cart]));
	}
}

export const decrementCartLC = (cart: ICart) => {
	let obj: ICart[];
	if (localStorage.getItem("cart")) {
		obj = JSON.parse(localStorage.getItem("cart") || "");
		obj.forEach((item: ICart) => {
			if (item.articul === cart.articul) {
				if (item.count > 1) {
					item.count--;
					item.totalPrice -= item.price;
					localStorage.setItem("cart", JSON.stringify([...obj]))
				} else {
					let obj2: ICart[] = obj.filter((item: ICart) => item.count !== 1)
					console.log(obj2)
					localStorage.setItem("cart", JSON.stringify([...obj2]))
				}
			}
		})
	}
}

export const clearCartLS = (articul: string) => {
	let obj: ICart[] = [];
	if (localStorage.getItem("cart")) {
		obj = JSON.parse(localStorage.getItem("cart") || "");
		let obj2 = obj.filter((item: ICart) => item.articul !== articul);
		localStorage.setItem("cart", JSON.stringify(obj2))
	}
}
