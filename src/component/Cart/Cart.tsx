import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import Button from "../ui/Button/Button";
import Empty from "./Empty/Empty";

import { addToLC, clearCartLS, decrementCartLC } from "../../hok";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ICart } from "../../types/pizzaTypes";

import styles from './Cart.module.scss';
import Orderpopup from "../ui/Orderpopup/Orderpopup";

const Cart: FC = () => {
	const { cart, totalCount, totalPrice, isLoading, error } = useTypedSelector(state => state.cart);

	const { getCartAC, removeCartAC } = useAction();

	const [vizible, setVizible] = useState<boolean>(false)


	const navigate = useNavigate();

	const incrementCart = (cart: ICart) => {
		addToLC(cart);
		getCartFormLC();
	}

	const decrement = (cart: ICart) => {
		decrementCartLC(cart);
		getCartFormLC();
	}

	const clearCart = (articul: string) => {
		clearCartLS(articul);
		getCartFormLC();
	}

	const getCartFormLC = () => {
		if (localStorage.getItem("cart")) {
			getCartAC(JSON.parse(localStorage.getItem("cart") || ""));
		} else {
			removeCartAC([]);
		}
	}

	const removeCart = () => {
		localStorage.removeItem("cart");
		getCartFormLC();
	}
	const cartCheckout = () => {
		setVizible(true);

		setTimeout(() => {
			setVizible(false);
			navigate("/");
		}, 1000);

		if (localStorage.getItem("cart")) {
			localStorage.removeItem("cart");
			removeCartAC([])
		}
	}

	useEffect(() => {
		getCartFormLC()
	}, [])

	if (!cart.length) {
		return (
			<>
				{vizible && <Orderpopup text="ваш заказ принят!" isCart={true} />}
				<Empty />
			</>
		);

	}

	if (isLoading) {
		return <div>loading....</div>
	}

	if (error) {
		return <div>error....</div>
	}

	return (
		<div className={styles.cart}>

			<div className={styles.top}>
				<h2 className={styles.title}><span></span> Корзина</h2>
				<div className={styles.clearBtn} onClick={removeCart} > <span></span>Очистить корзину</div>
			</div>
			<div className={styles.cartItem}>
				{cart.map((item: ICart) => (<CartItem
					key={item.id}
					articul={item.articul}
					count={item.count}
					id={item.id}
					img={item.img}
					price={item.price}
					size={item.size}
					title={item.title}
					totalPrice={item.totalPrice}
					type={item.type}
					incrementCart={incrementCart}
					decrement={decrement}
					clearCart={clearCart}
				/>))}
			</div>
			<div className={styles.infos}>
				<div className={styles.totalPizzes}>Всего пицц: <span>{totalCount}  шт.</span></div>
				<div className={styles.totalCount}>Сумма заказа: <span> {totalPrice} ₽</span></div>
			</div>
			<div className={styles.buttons}>
				<Link to="/">
					<Button backBtn isCartBtn={false} text={'Вернуться назад'} />
				</Link>
				<Button isCartBtn onClick={cartCheckout} text={'Оплатить сейчас'} />
			</div>

		</div>
	);
}
export default Cart;