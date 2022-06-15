import { FC } from "react";
import styles from './Button.module.scss';

interface ButtonProps {
	isCartBtn: boolean;
	text: string;
	count?: number | null;

}

const Button: FC<ButtonProps> = ({ isCartBtn, text, count }) => {
	return (
		<button className={isCartBtn ? styles.cartBtn : styles.cardBtn}>
			<span className={styles.price}>{text}</span>
			<span className={styles.count}>{count}</span>
		</button>
	);
}

export default Button;