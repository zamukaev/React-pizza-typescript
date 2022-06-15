import classNames from "classnames";
import { FC, useState } from "react";
import PopUp from "../ui/PopUp/PopUp";
import styles from './Filter.module.scss';
interface FilterProps {

}
const array = ['Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const Filter: FC<FilterProps> = () => {
	const [itemSelected, setItemSelected] = useState<number | null>(null);
	const onSelectedHandler = (value: string, index: number): void => {
		setItemSelected(index)
		console.log(value)
	}
	return (
		<div className={styles.content}>
			<div className={styles.filter}>
				<div onClick={() => setItemSelected(null)} className={classNames(styles.item, { [styles.active]: itemSelected === null })}>Все</div>
				{array.map((elem, index) => (
					<div onClick={() => onSelectedHandler(elem, index)} className={classNames(styles.item, { [styles.active]: index === itemSelected })}>{elem}</div>
				))
				}
			</div>
			<PopUp />
		</div >
	);
}

export default Filter;