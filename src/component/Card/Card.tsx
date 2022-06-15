import { FC, useState } from "react";
import styles from './Card.module.scss';
import img1 from '../../assets/01.png'
import Button from "../ui/Button/Button";
import classNames from "classnames";
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

const Card: FC<CardProps> = ({ articul, id, img, price, rating, size, title, type }) => {
	const [doughSelected, setDoughSelected] = useState<number>(0);
	const [sizeSelected, setSizeSelected] = useState<number>(0)

	const onSelectTypeHandler = (value: string, index: number): void => {
		setDoughSelected(index)
		console.log(value)
	}
	const onSelectSizeHandler = (size: number, index: number) => {
		setSizeSelected(index)
		console.log(size)
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
							className={classNames(styles.item, { [styles.active]: index === doughSelected })}>{elem}</div>))}
					</div>
					<div className={styles.doughSm}>
						{size.map((size, index) => (<div
							onClick={() => onSelectSizeHandler(size, index)}
							key={size}
							className={classNames(styles.item, { [styles.active]: index === sizeSelected })}>{size} cm</div>))}
					</div>
				</div>
				<div className={styles.footer}>
					<span className={styles.price}>от {price} ₽</span>
					<div className={styles.button}><Button text="Добавить" isCartBtn={false} /></div>
				</div>
			</div>
		</div >
	);
}

export default Card;