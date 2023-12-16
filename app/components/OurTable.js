import { Table } from '@radix-ui/themes'

const defualtRecords = [
  {
    title: 'Card of paper?',
    subtitle: 'subsamich',
    img: 'bar',
    description: ' thesevare words',
  },
]
const defaultColumns = [
  {
    title: 'Title ',
    key: 'title',
  },
  {
    title: 'Subtitle ',
    key: 'subtitle',
  },
  {
    title: 'Image ',
    key: 'img',
  },
  {
    title: 'Description ',
    key: 'description',
  },
]
export const revalidate = 0

export default function OurTable({ columns = defaultColumns, records = defualtRecords }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column, idx) => (
            <Table.ColumnHeaderCell key={idx}>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row key={record.id}>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell key={`${record.id}-${idx}`}>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell key={`${record.id}-${idx}`}>{record[column.key]}</Table.Cell>
              ),
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
