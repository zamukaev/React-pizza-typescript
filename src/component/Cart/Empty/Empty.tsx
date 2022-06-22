import { FC } from 'react';
import { Link } from 'react-router-dom';

import img from '../../../assets/icons/empty.png';
import Button from '../../ui/Button/Button';

import styles from './Empty.module.scss';

const Empty: FC = () => {
	return (
		<div className={styles.empty}>
			<div className={styles.title}>Корзина пустая	😕</div>
			<div className={styles.text}>
				Вероятней всего, вы не заказывали ещё пиццу.
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</div>
			<div className={styles.image}><img src={img} alt="" /></div>
			<Link to="/">
				<Button backBtn text={"Вернуться назад"} />
			</Link>
		</div>
	);
}

export default Empty;