import { FC } from "react";

import { Route, Routes } from "react-router-dom";

import Cart from "../component/Cart/Cart";
import Layout from "../component/Layout/Layout";
import Main from "../component/Main/Main";



interface RoutsProps {

}
const Routs: FC<RoutsProps> = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Layout>
	);
}
export default Routs;