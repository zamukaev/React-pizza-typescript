import { FC } from "react";
import { useParams } from "react-router-dom";

import Header from "../Header/Header";

import styles from './Layout.module.scss';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			{children}
		</div>
	);
}

export default Layout;