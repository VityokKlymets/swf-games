import React, { useState } from 'react'
import { Input, Table } from 'semantic-ui-react'
import { Query } from 'react-apollo'
import { FIND_GAMES } from '../../queries'
export default () => {
  const [query, setQuery] = useState('')
  const handleChange = (e, findGames) => {
    setQuery(e.target.value)
  }
  const renderTable = games => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            ID
          </Table.HeaderCell>
          <Table.HeaderCell>
            Ім'я
          </Table.HeaderCell>
          <Table.HeaderCell>
            Категорія
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {games.map((game, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>
              {game.id}
            </Table.Cell>
            <Table.Cell>
              {game.name}
            </Table.Cell>
            <Table.Cell>
              {game.category}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
  return (
    <Query
      query={FIND_GAMES}
      variables={{
        query
      }}
    >
      {({ data, loading }) => (
        <div>
          <Input
            value={query}
            onChange={handleChange}
            icon='search'
            placeholder='Шукати...'
            loading={loading}
          />
          {!loading && renderTable(data.findGames)}
        </div>
      )}

    </Query>
  )
}
