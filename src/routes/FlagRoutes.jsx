import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const FlagRoutes = () => {
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
				<Link to="/flag/Flag">
					<Button primary content="Flag" />
				</Link>
			</div>
		</div>
	);
}

export default FlagRoutes