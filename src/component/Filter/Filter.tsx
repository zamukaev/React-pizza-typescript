import { FC, useState } from "react";

import PopUp from "../ui/PopUp/PopUp";

import { useAction } from "../../hooks/useAction";

import classNames from "classnames";

import styles from './Filter.module.scss';

interface FilterProps {

}

const array = ['Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Filter: FC<FilterProps> = () => {
	const [itemSelected, setItemSelected] = useState<number | null>(null);

	const { SortPizzaByTypeAC, fetchPizzas } = useAction()

	const onSelectedHandler = (index: number | null): void => {
		setItemSelected(index)
		fetchPizzas(index)

		console.log(index)
	}
	return (
		<div className={styles.content}>
			<div className={styles.filter}>
				<div onClick={() => onSelectedHandler(null)} className={classNames(styles.item, { [styles.active]: itemSelected === null })}>Все</div>
				{array.map((elem, index) => (
					<div key={elem + index} onClick={() => onSelectedHandler(index)} className={classNames(styles.item, { [styles.active]: index === itemSelected })}>{elem}</div>
				))
				}
			</div>
			<PopUp itemSelected={itemSelected} />
		</div >
	);
}

export default Filter;