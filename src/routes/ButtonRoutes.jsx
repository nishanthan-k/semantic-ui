import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ButtonRoutes = () => {
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
				<Link to="/button/GeneralBtn">
					<Button primary content="General Btn" />
				</Link>
				<Link to="/button/AnimatedBtn">
					<Button secondary content="Animated Button" />
				</Link>
				<Link to="/button/LabeledBtn">
					<Button primary content="Labeled Button" />
				</Link>
				<Link to="/button/IconBtn">
					<Button primary content="Icon Button" />
				</Link>
				<Link to="/button/GroupBtn">
					<Button primary content="Group Button" />
				</Link>
			</div>
		</div>
	);
};

export default ButtonRoutes;
