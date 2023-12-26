import { Button } from "semantic-ui-react";

const GroupBtn = () => {
	const style = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "10px",
		marginTop: "50px",
		width: "200px",
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={style}>
				<Button.Group>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</Button.Group>

				<Button.Group>
					<Button content="One" />
					<Button content="Two" />
					<Button content="Three" />
				</Button.Group>

        <Button.Group buttons={["One", "Two", "Three"]} />
			</div>
		</div>
	);
};

export default GroupBtn;
