import React, { useState, Fragment } from 'react'
import { Menu, Grid, Loader, Header, Icon } from 'semantic-ui-react'
import TopLine from '../navbar/TopLine'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../../queries'
import AddGameForm from '../forms/AddGameForm'
import SearchForm from '../forms/SearchForm'
export default () => {
  const [activeItem, setActiveItem] = useState('Знайти')
  const setMenuItem = name => {
    return {
      name,
      active: activeItem === name,
      onClick: () => setActiveItem(name)
    }
  }
  const renderGameForm = () => (
    <Query query={GET_CATEGORIES}>
      {({ data, loading }) => {
        if (loading) return <Loader active inline='centered' />
        return <AddGameForm categories={data.categories} />
      }}
    </Query>
  )
  const renderSearchForm = () => <SearchForm />
  return (
    <Fragment>
      <TopLine isAdmin />
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <Header as='h4'>
              <Icon name='plug' />
              <Header.Content>Панель адміністратора</Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={4}>
            <Menu size='large' fluid vertical>
              <Menu.Item
                as='a'
                href='/'
                icon='home'
                {...setMenuItem('Домашня')}
              />
              <Menu.Item>
                Ігри
                <Menu.Menu>
                  <Menu.Item icon='edit' {...setMenuItem('Додати')} />
                  <Menu.Item icon='search' {...setMenuItem('Знайти')} />
                </Menu.Menu>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column computer={6}>
            {activeItem === 'Додати' && renderGameForm()}
            {activeItem === 'Знайти' && renderSearchForm()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Fragment>
  )
}
