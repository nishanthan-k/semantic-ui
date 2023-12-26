import { Button, Icon, Label } from "semantic-ui-react";

const LabeledBtn = () => {
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
				<Button as="div" labelPosition="left">
					<Button icon>
						<Icon name="heart" />
						Like
					</Button>
					<Label as="a" basic pointing="left">
						Like
					</Label>
				</Button>

				<Button
					content="Like"
					icon="like"
					label={{
						as: "a",
						basic: "false",
						content: "Pointing right",
						pointing: "right",
					}}
					labelPosition="left"
				/>

				<Button
					content="Like"
					icon="like"
					label={{
						as: "a",
						basic: "false",
						content: "Pointing right",
						pointing: "left",
					}}
					labelPosition="left"
				/>

				<Button
					content="Like"
					icon="like"
					label={{
						as: "a",
						basic: "false",
						content: "Pointing right",
						pointing: "left",
					}}
					labelPosition="right"
				/>

				{/* Colored btn  */}
				<Button as="div" labelPosition="left">
					<Button icon color="red">
						<Icon name="heart" />
						Like
					</Button>
					<Label as="a" basic pointing="left">
						Like
					</Label>
				</Button>

				{/* Colored label  */}
				<Button as="div" labelPosition="left">
					<Button icon>
						<Icon name="heart" />
						Like
					</Button>
					<Label as="a" basic pointing="left" color="red">
						Like
					</Label>
				</Button>

				{/* Fully colored  */}
				<Button as="div" labelPosition="left">
					<Button icon  color="blue">
						<Icon name="heart" />
						Like
					</Button>
					<Label as="a" basic pointing="left" color="blue">
						Like
					</Label>
				</Button>
			</div>
		</div>
	);
};

export default LabeledBtn;
