import React, { useState } from 'react'
import { Input, Table, Button, Icon } from 'semantic-ui-react'
import { Query, Mutation } from 'react-apollo'
import DeleteGameModal from '../modals/DeleteGameModal'
import { FIND_GAMES, DELETE_GAME } from '../../queries'
const SearchForm = () => {
  const [query, setQuery] = useState('')
  const [deleteModal, setDeleteModal] = useState({
    open: false
  })
  const handleChange = e => {
    setQuery(e.target.value)
  }
  const deleteHandler = (deleteGame, gameId, refetch) => {
    deleteGame({
      variables: {
        id: gameId
      }
    }).then(data => {
      refetch()
      setDeleteModal({
        open: false
      })
    })
  }
  const renderTable = (games, refetch) => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            ID
          </Table.HeaderCell>
          <Table.HeaderCell>
            Ім'я
          </Table.HeaderCell>
          <Table.HeaderCell colSpan='2'>
            Категорія
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {games.map(({ id, name, category }, idx) => (
          <Table.Row key={idx}>
            <Table.Cell>
              {id}
            </Table.Cell>
            <Table.Cell>
              {name}
            </Table.Cell>
            <Table.Cell>
              {category}
            </Table.Cell>
            <Table.Cell>
              <Mutation mutation={DELETE_GAME}>
                {deleteGame => (
                  <Button
                    onClick={() =>
                      setDeleteModal({
                        open: true,
                        onConfirm: () => deleteHandler(deleteGame, id, refetch),
                        onReject: () =>
                          setDeleteModal({
                            open: false
                          })
                      })}
                    circular
                    basic
                    icon
                  >
                    <Icon name='trash' />
                  </Button>
                )}
              </Mutation>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
  return (
    <div>
      <Query
        query={FIND_GAMES}
        variables={{
          query
        }}
      >
        {({ data, loading, refetch }) => {
          return (
            <div>
              <Input
                value={query}
                onChange={handleChange}
                icon='search'
                placeholder='Шукати...'
                loading={loading}
              />
              {!loading && renderTable(data.findGames, refetch)}
            </div>
          )
        }}
      </Query>
      <DeleteGameModal {...deleteModal} />
    </div>
  )
}
export default SearchForm
