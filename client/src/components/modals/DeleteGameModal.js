import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default ({ open, onConfirm, onReject }) => {
  return (
    <Modal open={open}>
      <Header icon='trash alternate' content='Видалити гру' />
      <Modal.Content>
        <p>
          Ви впевнені що хочете видалити цю гру
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onReject} color='red'>
          <Icon name='remove' /> Ні
        </Button>
        <Button onClick={onConfirm} color='green'>
          <Icon name='checkmark' /> Так
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
