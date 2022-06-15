import { FC } from "react";
import Layout from "../component/Layout/Layout";
import Main from "../component/Main/Main";

interface RoutsProps {

}

const Routs: FC<RoutsProps> = () => {
	return (
		<Layout>
			<Main />
		</Layout>
	);
}

export default Routs;