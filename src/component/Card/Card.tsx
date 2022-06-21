import { FC, useEffect, useState } from "react";

import classNames from "classnames";

import Button from "../ui/Button/Button";

import { useAction } from "../../hooks/useAction";
import { addToLC } from "../../hok";

import { ICart } from "../../types/pizzaTypes";

import styles from './Card.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CardProps {
	id: number;
	articul: string;
	title: string
	price: number;
	img: string;
	rating: number;
	size: number[];
	type: string[];
}

const Card: FC<CardProps> = ({ articul, id, img, price, size, title, type }) => {
	const [doughType, setDoughType] = useState<string>(type[0]);
	const [sizeSelected, setSizeSelected] = useState<number>(size[0]);

	const { getCartAC } = useAction()

	const onSelectTypeHandler = (value: string, index: number): void => {
		setDoughType(type[index])
	}

	const onSelectSizeHandler = (value: number, index: number) => {
		setSizeSelected(size[index])
	}

	const addToCart = (cart: ICart) => {
		addToLC(cart);
		getCartFormLC()
	}

	useEffect(() => {
		getCartFormLC()
	}, [])

	const getCartFormLC = () => {
		if (localStorage.getItem("cart")) {
			let cartItem = JSON.parse(localStorage.getItem("cart") || '')
			getCartAC(cartItem)
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.column}>
				<div className={styles.image}><img src={img} alt="" /></div>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.options}>
					<div className={styles.dough}>
						{type.map((elem, index) => (<div
							onClick={() => onSelectTypeHandler(elem, index)}
							key={elem}
							className={classNames(styles.item, { [styles.active]: elem === doughType })}>{elem}</div>))}
					</div>
					<div className={styles.doughSm}>
						{size.map((size, index) => (<div
							onClick={() => onSelectSizeHandler(size, index)}
							key={size}
							className={classNames(styles.item, { [styles.active]: size === sizeSelected })}>{size} cm</div>))}
					</div>
				</div>
				<div className={styles.footer}>
					<span className={styles.price}>от {price} ₽</span>
					<div className={styles.button}>
						<Button
							onClick={() => addToCart({ articul, id, img, price, title, type: doughType, size: sizeSelected, count: 1, totalPrice: price })}
							text="Добавить" isCardBtn />
					</div>
				</div>
			</div>
		</div >
	);
}
export default Card;