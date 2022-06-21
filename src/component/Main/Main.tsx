import { FC, useEffect } from "react";

import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import MyLoader from "../../MyLoader/MyLoader";

import styles from './Main.module.scss';

interface MainProps {

}

const Main: FC<MainProps> = () => {
	const { fetchPizzas } = useAction();
	const { error, isLoading, pizzas } = useTypedSelector(state => state.pizza);
	const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
	useEffect(() => {
		fetchPizzas()
	}, []);


	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<>
			<Filter />
			<div className={styles.contant}>
				{isLoading && arr.map((item: any) => <div key={item} className={styles.myloader}><MyLoader /></div>)}
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
		</>
	);
}
export default Main;