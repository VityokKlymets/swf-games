import React, { useState, Fragment } from 'react'
import FileInput from '../inputs/FileInput'
import { CHECK_IS_ADMIN } from '../../queries'
import { compose, graphql } from 'react-apollo'
import { Redirect } from 'react-router-dom'
import FlashPlayer from '../player/NewFlashPlayer'
import TopLine from '../navbar/TopLine'

import { Grid, Button, Header, Container, Icon } from 'semantic-ui-react'
const Test = ({ isAdmin }) => {
  const [flashData, setFlashData] = useState('/game.swf')
  const changeHandler = data => {
    setFlashData(data.original)
  }
  const takeScreenshot = () => {}
  const renderPage = () => (
    <Fragment>
      <TopLine />
      <Container>
        <Grid>
          <Grid.Row>
            <Header
              style={{
                borderRadius: '10px',
                marginTop: '1em'
              }}
              as='h1'
            >
              <Icon name='settings' />
              <Header.Content>Welcome to the testing page</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column computer={3}>
              <FileInput
                onChange={changeHandler}
                placeholder='Виберіть файл swf'
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <FlashPlayer src={flashData} />
              <Button
                style={{
                  margin: '1em 0'
                }}
                onClick={takeScreenshot}
              >
                Take screenshot
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  )
  return isAdmin ? renderPage() : <Redirect to='/' />
}
export default compose(
  graphql(CHECK_IS_ADMIN, {
    props: ({ data: { isAdmin } }) => ({
      isAdmin
    })
  })
)(Test)
