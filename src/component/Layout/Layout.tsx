import { FC } from "react";
import styles from './Layout.module.scss';
import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import Filter from "../Filter/Filter";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<Filter />
			{children}
		</div>
	);
}

export default Layout;