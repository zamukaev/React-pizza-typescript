
import { FC } from "react";

import classNames from "classnames";

import styles from './ToggleBtn.module.scss';

interface ToggleBtnProps {
	isIncrement?: boolean;
	isDerement?: boolean;
	isClear?: boolean
	onClickHandler: () => void;
}

const ToggleBtn: FC<ToggleBtnProps> = ({ isIncrement, isDerement, isClear, onClickHandler }) => {

	return (
		<div
			onClick={onClickHandler}
			className={classNames(styles.toggleBtn, { [styles.increment]: isIncrement, [styles.decrement]: isDerement, [styles.clear]: isClear })}>
			<span></span>
		</div>
	);
}

export default ToggleBtn;