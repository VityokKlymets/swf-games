import React, { useState } from 'react'
import { Menu, Grid, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../queries'
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
      <Grid.Row>
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
        <Grid.Column computer={6}>
          <Query query={GET_CATEGORIES}>
            {({ data, loading }) => {
              if (loading) return <Loader active inline />
              return <AddGameForm categories={data.categories} />
            }}
          </Query>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
