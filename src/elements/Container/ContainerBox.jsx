import { Container, Divider, Header } from "semantic-ui-react";

const ContainerBox = () => {
	return (
		<div>
			<Header as="h2">Standard Container</Header>
			<Container>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
					aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
					imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
					mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
					dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
					ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
				</p>
			</Container>

			<Header as="h2">Text Container</Header>
			<Container text>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
					aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
					imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
					mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
					dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
					ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
				</p>
			</Container>

			<Container textAlign="left">Left Aligned</Container>
			<Container textAlign="center">Center Aligned</Container>
			<Container textAlign="right">Right Aligned</Container>
			<Container textAlign="justified">
				{/* bold text  */}
				<b>Justified</b>

				{/* straight line  */}
				<Divider />
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
					aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
					imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
					mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
					dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
					ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
					Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
					aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
					imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
					mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
					porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
					dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
					ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
					ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
				</p>
			</Container>

			<Container fluid>
				<Header as="h2">Fluid Container</Header>
				<p>
					Domestic dogs inherited complex behaviors, such as bite inhibition,
					from their wolf ancestors, which would have been pack hunters with
					complex body language. These sophisticated forms of social cognition
					and communication may account for their trainability, playfulness, and
					ability to fit into human households and social situations, and these
					attributes have given dogs a relationship with humans that has enabled
					them to become one of the most successful species on the planet today.
				</p>
				<p>
					The value to early human hunter-gatherers led to them quickly
					becoming ubiquitous across world cultures. Dogs perform many roles for
					people, such as hunting, herding, pulling loads, protection, assisting
					police and military, companionship, and, more recently, aiding
					handicapped individuals. This impact on human society has given them
					the nickname in the Western world. In some
					cultures, however, dogs are also a source of meat.
				</p>
			</Container>
		</div>
	);
};

export default ContainerBox;
