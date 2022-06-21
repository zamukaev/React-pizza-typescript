import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
	<ContentLoader
		speed={0}
		width={280}
		height={458}
		viewBox="0 0 280 458"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="135" cy="121" r="117" />
		<rect x="0" y="285" rx="3" ry="3" width="280" height="78" />
		<rect x="4" y="386" rx="3" ry="3" width="78" height="29" />
		<rect x="130" y="378" rx="20" ry="20" width="153" height="41" />
		<rect x="0" y="250" rx="0" ry="0" width="280" height="21" />
	</ContentLoader>
)

export default MyLoader