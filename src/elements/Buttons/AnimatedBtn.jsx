import { Button, Icon } from "semantic-ui-react";

const AnimatedBtn = () => {
	const style = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "10px",
		marginTop: "50px",
		width: "100px",
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={style}>
				<Button animated>
					<Button.Content visible>Next</Button.Content>
					<Button.Content hidden>
						<Icon name="arrow right" />
					</Button.Content>
				</Button>

				<Button animated="vertical">
					<Button.Content visible>
						<Icon name="cart" />
					</Button.Content>
          <Button.Content hidden>Cart</Button.Content>
				</Button>

				<Button animated="fade" style={{width: "150px"}}>
					<Button.Content visible>
						Sign Up
					</Button.Content>
          <Button.Content hidden>
            Sign up cost $15.00
          </Button.Content>
				</Button>
			</div>
		</div>
	);
};

export default AnimatedBtn;
