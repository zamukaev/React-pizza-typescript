import { FC, useState } from "react";
import styles from './PopUp.module.scss';

import { useAction } from "../../../hooks/useAction";
import { IPizzaSort } from "../../../types/pizzaTypes";

import classNames from "classnames";

interface PopUpProps {
	itemSelected: number | null;

}

const popUpArray = [
	{ name: 'популярности', type: "popular" },
	{ name: 'по цене', type: 'price' },
	{ name: 'по алфавиту', type: 'title', order: "asc" }
]

const PopUp: FC<PopUpProps> = ({ itemSelected }) => {

	const [isPopUpVizible, setIsPopUpVizible] = useState(false);
	const [selectedValue, setSelectedValue] = useState<number | null>(null);
	const [value, setValue] = useState<IPizzaSort>({ name: 'популярности', type: 'popular' });

	const { fetchPizzas } = useAction()

	const onSelectHandler = (item: IPizzaSort, index: number | null): void => {
		setSelectedValue(index);
		setValue(value);
		fetchPizzas(itemSelected, item)
		setIsPopUpVizible(!isPopUpVizible);
	}

	return (
		<div className={styles.popup}>
			<div onClick={() => setIsPopUpVizible(!isPopUpVizible)}
				className={styles.selectedValue} >Сортировка по:
				<span className={classNames(styles.activeValue, { [styles.active]: isPopUpVizible })}>
					{value.name}
				</span>
			</div>
			<div className={classNames(styles.selectBody, { [styles.active]: isPopUpVizible })}>
				{popUpArray.map((elem, index) => (
					<div key={elem.type + index} onClick={() => onSelectHandler(elem, index)}
						className={classNames(styles.item, { [styles.active]: index === selectedValue })} >
						{elem.name}
					</div>
				))}
			</div>
		</div >
	);
}

export default PopUp;