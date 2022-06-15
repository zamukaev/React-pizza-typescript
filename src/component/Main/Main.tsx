import { FC, useEffect } from "react";
import styles from './Main.module.scss';
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Card from "../Card/Card";

interface MainProps {

}

const Main: FC<MainProps> = () => {
	const { fetchPizzas } = useAction();
	const { error, isLoading, pizzas } = useTypedSelector(state => state.pizza)
	useEffect(() => {
		fetchPizzas()
	}, [])
	console.log(pizzas)

	if (isLoading) {
		return <h1>loading...</h1>
	}
	return (
		<div className={styles.contant}>
			{pizzas.map(pizza => (
				<Card key={pizza.id}
					articul={pizza.articul}
					id={pizza.id}
					img={pizza.img}
					price={pizza.price}
					rating={pizza.rating}
					size={pizza.size}
					title={pizza.title}
					type={pizza.type}
				/>))}
		</div>
	);
}

export default Main;