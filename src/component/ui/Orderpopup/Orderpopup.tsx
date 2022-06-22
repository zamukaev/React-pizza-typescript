import classNames from "classnames";
import { FC } from "react";

import styles from './Orderpopup.module.scss';

interface OrderpopupProps {
	text: string
	isCart?: boolean;
}

const Orderpopup: FC<OrderpopupProps> = ({ text, isCart }) => {
	return (
		<div className={classNames({ [styles.cart]: isCart, [styles.orderpopup]: !isCart })}>
			<h3>{text}</h3>
		</div >
	);
}
export default Orderpopup;