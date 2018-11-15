import React from 'react'
import FlashPlayer from '../player/FlashPlayer'
import { Grid, Divider, Breadcrumb } from 'semantic-ui-react'
export default ({ name, src }) => {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column computer={11} mobile={16}>
          <Breadcrumb>
            <Breadcrumb.Section href='/'>Додому</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{name}</Breadcrumb.Section>
          </Breadcrumb>
          <Divider />
          <FlashPlayer src={src} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
