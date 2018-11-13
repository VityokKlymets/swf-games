import React, { useState } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AddGameForm from '../forms/AddGameForm'
export default () => {
  const [activeItem, setActiveItem] = useState('add')
  const setMenuItem = name => {
    return {
      name,
      active: activeItem === name,
      onClick: () => setActiveItem(name)
    }
  }
  return (
    <Grid padded>
      <Grid.Row centered>
        <Grid.Column computer={4}>
          <Menu vertical>
            <Link to='/'>
              <Menu.Item icon='home' {...setMenuItem('home')} />
            </Link>
            <Menu.Item>
              Games
              <Menu.Menu>
                <Menu.Item icon='edit' {...setMenuItem('add')} />
                <Menu.Item icon='search' {...setMenuItem('find')} />
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column computer={11}>
          <AddGameForm />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
