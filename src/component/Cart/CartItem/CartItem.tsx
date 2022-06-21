import React, { FC } from "react";

import ToggleBtn from "../../ui/toggleBtn/ToggleBtn";

import { ICart } from "../../../types/pizzaTypes";

import styles from './CartItem.module.scss';

interface CartItemProps {
	id: number;
	articul: string;
	count: number;
	price: number;
	totalPrice: number;
	img: string;
	size: number;
	title: string;
	type: string;
	incrementCart: (cart: ICart) => void;
	decrement: (cart: ICart) => void;
	clearCart: (articul: string) => void;

}
const CartItem: FC<CartItemProps> = ({ articul, count, id, img, price, size, title, totalPrice, type, incrementCart, decrement, clearCart }) => {

	const onClickHandler = () => {
		incrementCart({ articul, count, id, img, price, size, title, totalPrice, type })
	}

	const onDecrementHandler = () => {
		decrement({ articul, count, id, img, price, size, title, totalPrice, type })
	}
	const onClearHandler = () => {
		clearCart(articul)
	}


	return (
		<div className={styles.cartItem}>
			<div className={styles.left}>
				<div className={styles.image}><img src={img} alt="" /></div>
				<div className={styles.body}>
					<div className={styles.title}>{title}</div>
					<div className={styles.text}><span>{type}</span>, <span>{size}</span> см.</div>
				</div>
			</div>
			<div className={styles.center}>
				<span className={styles.decrement}>{<ToggleBtn isDerement onClickHandler={onDecrementHandler} />}</span>
				<span className={styles.count}>{count}</span>
				<span className={styles.increment}>{<ToggleBtn isIncrement onClickHandler={onClickHandler} />}</span>
			</div>
			<div className={styles.right}>
				<div className={styles.price}>{price} ₽ </div>
				<div className={styles.totalPrice}> Total: {totalPrice} ₽ </div>
				<div className={styles.clear}>{<ToggleBtn onClickHandler={onClearHandler} isClear />}</div>
			</div>
		</div>
	);
}

export default CartItem;