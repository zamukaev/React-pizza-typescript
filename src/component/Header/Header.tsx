import { FC } from "react";
import styles from './Header.module.scss';
import logo from '../../assets/icons/02.svg';
import Button from "../ui/Button/Button";
interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<div className={styles.logo}><img src={logo} alt="" /></div>
				<div className={styles.body}>
					<div className={styles.title}>REACT PIZZA</div>
					<div className={styles.subtitle}>самая вкусная пицца во вселенной</div>
				</div>
			</div>
			<div className={styles.headerRight}>
				<Button isCartBtn text="520 ₽" count={3} />
			</div>

		</header>
	);
}

export default Header;