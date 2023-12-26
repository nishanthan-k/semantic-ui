import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ContainerRoutes = () => {
	const style = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "10px",
		marginTop: "50px",
		width: "200px",
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", }}>
			<div style={style}>
				<Link to="/container/ContainerBox">
					<Button primary content="Container" />
				</Link>
			</div>
		</div>
	);
};

export default ContainerRoutes;
