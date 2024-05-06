import { Title, Table, Progress, Anchor, Text, Group } from '@mantine/core';
import classes from './TableReviews.module.css';
import { Welcome } from '../Welcome/Welcome'

const data = [
  {
    name: 'Ytterboe Lot',
    cars: 4,
    year: 6,
  },
  {
    name: 'Buntrock Visitor',
    cars: 25,
    year: 0,
  },
  {
    name: 'Buntrock Faculty and Staff',
    cars: 38,
    year: 12,
  },
  {
    name: 'Larson Lot',
    cars: 14,
    year: 1,
  },
  {
    name: 'Lot I',
    cars: 47,
    year: 23,
  },
  {
    name: 'Skoglund Student Lot',
    cars: 112,
    year: 18,
  },
];

export function TableReviews() {
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
const rows = data.map((row) => {
    return (
      <Table.Tr key={row.name}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.name}
          </Anchor>
        </Table.Td>
        <Table.Td>{row.year}</Table.Td>
        <Table.Td>{row.cars}</Table.Td>
        <Table.Td>{showTime}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={1100}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Parking Lot</Table.Th>
            <Table.Th> Spaces</Table.Th>
            <Table.Th>Cars</Table.Th>
            <Table.Th>Latest Check</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>

  );
  }