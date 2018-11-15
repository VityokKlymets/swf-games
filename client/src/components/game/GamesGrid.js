import React from 'react'
import GameItem from './GameItem'
import { Grid } from 'semantic-ui-react'

export default ({ games, centered = false }) => {
  return (
    <Grid centered={centered} stackable>
      <Grid.Row>
        {games.map((game, idx) => (
          <Grid.Column
            textAlign='center'
            style={{
              padding: '1em 1em'
            }}
            mobile={16}
            tablet={6}
            computer={4}
            key={idx}
          >
            <GameItem centered={centered} {...game} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}
