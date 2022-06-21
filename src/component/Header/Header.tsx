import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/icons/02.svg';
import Button from "../ui/Button/Button";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './Header.module.scss';
import { useAction } from "../../hooks/useAction";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
	const { totalCount, totalPrice } = useTypedSelector(state => state.cart);



	return (
		<header className={styles.header}>
			<Link to="/" className={styles.headerLeft}>
				<div className={styles.logo}><img src={logo} alt="" /></div>
				<div className={styles.body}>
					<div className={styles.title}>REACT PIZZA</div>
					<div className={styles.subtitle}>самая вкусная пицца во вселенной</div>
				</div>
			</Link>
			<Link to="/cart" className={styles.headerRight}>
				<Button isCartBtn text={totalPrice + ' ₽'} count={totalCount} />
			</Link>

		</header>
	);
}

export default Header;