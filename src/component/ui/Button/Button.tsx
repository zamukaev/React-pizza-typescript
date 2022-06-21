
import { FC } from "react";

import styles from './Button.module.scss';

import classNames from "classnames";

interface ButtonProps {
	isCartBtn?: boolean;
	backBtn?: boolean;
	isCardBtn?: boolean;
	text: string | number;
	count?: number | null;
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ onClick, isCartBtn, text, count, backBtn, isCardBtn }) => {
	return (
		<button onClick={onClick} className={classNames({ [styles.cartBtn]: isCartBtn, [styles.cardBtn]: isCardBtn, [styles.backToHome]: backBtn })}>
			<span className={styles.price}>{text} </span>
			<span className={styles.count}>{count}</span>
		</button>
	);
}

export default Button;