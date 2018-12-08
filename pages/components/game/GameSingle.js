import React, { useState } from 'react'
import FlashPlayer from '../player/FlashPlayer'
import DeleteGameModal from '../modals/DeleteGameModal'
import { Mutation } from 'react-apollo'
import { DELETE_GAME } from '../../queries/index'
import { Grid, Divider, Breadcrumb, Button, Icon } from 'semantic-ui-react'
import Router from 'next/router'
export default ({ name, src, id, isAdmin }) => {
  const [deleteModal, setDeleteModal] = useState({
    open: false
  })
  const deleteHandler = deleteGame => {
    deleteGame().then(() => {
      setDeleteModal({
        open: false
      })
      Router.push('/')
    })
  }
  const renderAdminRow = () => (
    <Grid.Row
      style={{
        paddingTop: '1em',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Grid.Column computer={2}>
        <Mutation mutation={DELETE_GAME} variables={{ id }}>
          {deleteGame => (
            <Button
              size='medium'
              circular
              icon
              color='red'
              onClick={() =>
                setDeleteModal({
                  open: true,
                  onConfirm: () => deleteHandler(deleteGame),
                  onReject: () =>
                    setDeleteModal({
                      open: false
                    })
                })
              }
            >
              <Icon name='trash' />
            </Button>
          )}
        </Mutation>
      </Grid.Column>
      <DeleteGameModal {...deleteModal} />
    </Grid.Row>
  )
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column computer={11} mobile={16}>
          <Breadcrumb>
            <Breadcrumb.Section href='/'>Домашня</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{name}</Breadcrumb.Section>
          </Breadcrumb>
          <Divider />
          <FlashPlayer src={src} />
          {isAdmin && renderAdminRow()}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
