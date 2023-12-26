import { Flag, Table } from "semantic-ui-react";

const FlagComponent = () => {
	const countries = [
		{ name: "Afghanistan", countryCode: "af" },
		{ name: "Aland Islands", countryCode: "ax" },
		{ name: "Albania", countryCode: "al" },
		{ name: "Algeria", countryCode: "dz" },
		{ name: "American Samoa", countryCode: "as" },
		{ name: "Andorra", countryCode: "ad" },
		{ name: "Angola", countryCode: "ao" },
		{ name: "Anguilla", countryCode: "ai" },
		{ name: "Antigua", countryCode: "ag" },
		{ name: "Argentina", countryCode: "ar" },
		{ name: "Armenia", countryCode: "am" },
	];

  // const flagRenderer = (item) => <Flag name={item.countryCode} />

	return (
    <div style={{margin: "50px"}}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Country</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Country Code</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {countries.map((country) => (
            <Table.Row key={country.countryCode}>
              <Table.Cell>{<Flag name={country.countryCode} />}</Table.Cell>
              <Table.Cell>{country.name}</Table.Cell>
              <Table.Cell>{country.countryCode}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
};

export default FlagComponent;
