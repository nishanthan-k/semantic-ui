import { Button } from "semantic-ui-react";

const GeneralBtn = () => {
	const style = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "10px",
		marginTop: "50px",
		width: "200px",
	};

	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<div style={style}>
				<Button>It is a Button</Button>
				<Button content="Semantic Btn" />
				<Button primary content="Primary Btn" />
				<Button secondary content="Secondary Btn" />
				<Button inverted  content="Inverted Btn" /> {/* this will be visible only on hover but it's on that same place */}
			</div>
		</div>
	);
};

export default GeneralBtn;
