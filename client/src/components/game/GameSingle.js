import React, { useState, useEffect } from 'react'
import FlashPlayer from '../player/FlashPlayer'
import { Grid, Divider, Breadcrumb, Button } from 'semantic-ui-react'
export default ({ name, src }) => {
  const [fullscreen, setFullscreen] = useState(false)
  useEffect(() => {
    const onKeyPress = e => {
      if (e.key === 'Escape') {
        setFullscreen(false)
      }
    }
    window.addEventListener('keydown', onKeyPress)
  })
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column computer={9}>
          <Breadcrumb>
            <Breadcrumb.Section href='/'>Додому</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>{name}</Breadcrumb.Section>
          </Breadcrumb>
          <Divider />
          <FlashPlayer fullscreen={fullscreen} src={src} />
          <Grid.Row>
            <Grid.Column>
              <Button
                floated='right'
                color='green'
                style={{
                  margin: '2em 0'
                }}
                onClick={() => setFullscreen(true)}
              >
                На весь екран
              </Button>
            </Grid.Column>
          </Grid.Row>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
