import React from 'react'
import GameItem from './GameItem'
import { Grid } from 'semantic-ui-react'

export default ({ games, centered = false }) => {
  return (
    <Grid padded='horizontally' centered={centered} stackable>
      <Grid.Row columns={5}>
        {games.map((game, idx) => (
          <Grid.Column
            textAlign='center'
            style={{
              padding: '1em 1em'
            }}
            key={idx}
          >
            <GameItem centered={centered} {...game} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}
