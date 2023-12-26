import { Button, Icon } from "semantic-ui-react";


const IconBtn = () => {
  const style = {
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "10px",
		marginTop: "50px",
		width: "70px",
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", }}>
			<div style={style}>
				<Button as="div">
          <Icon name="world" />
        </Button>

        <Button icon="world" />

        <Button icon="world" color="green" />
			</div>
		</div>
	);
}

export default IconBtn