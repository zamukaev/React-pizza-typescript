import classNames from "classnames";
import { FC, useState } from "react";
import styles from './PopUp.module.scss';

interface PopUpProps {

}
const popUpArray = ['по цене', 'по алфавиту'];
const PopUp: FC<PopUpProps> = () => {
	const [isPopUpVizible, setIsPopUpVizible] = useState(false);
	const [selectedValue, setSelectedValue] = useState<number | null>(null);
	const [value, setValue] = useState('популярности')

	const onSelectHandler = (value: string, index: number | null): void => {
		setSelectedValue(index);
		setValue(value);
		setIsPopUpVizible(!isPopUpVizible);
		console.log(value);
	}
	return (
		<div className={styles.popup}>
			<div onClick={() => setIsPopUpVizible(!isPopUpVizible)} className={styles.selectedValue} >Сортировка по:  <span className={classNames(styles.activeValue, { [styles.active]: isPopUpVizible })}>{value} </span></div>
			<div className={classNames(styles.selectBody, { [styles.active]: isPopUpVizible })}>
				<div onClick={() => onSelectHandler('популярности', null)} className={classNames(styles.item, { [styles.active]: selectedValue === null })}>{value}</div>
				{popUpArray.map((elem, index) => (<div onClick={() => onSelectHandler(elem, index)} className={classNames(styles.item, { [styles.active]: index === selectedValue })} > {elem}</div>))}
			</div>
		</div >
	);
}

export default PopUp;