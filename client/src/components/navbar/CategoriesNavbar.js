import React from 'react'
import { Menu, Icon, Loader } from 'semantic-ui-react'
import { GET_CATEGORIES } from '../../queries'
import { Query } from 'react-apollo'
export default ({ style = {}, currentCategory = '' }) => {
  const iconColor = 'black'
  return (
    <Query query={GET_CATEGORIES}>
      {({ loading, data }) => {
        if (loading) return <Loader active inline='centered' />
        return (
          <Menu style={{ ...style }} icon='labeled' stackable>
            {data.categories.map((cat, idx) => (
              <Menu.Item
                as='a'
                href={`/category/${cat.value}`}
                key={idx}
                name={cat.value}
                active={currentCategory === cat.value}
              >
                <Icon color={iconColor} name={cat.icon} />
                {cat.text}
              </Menu.Item>
            ))}
          </Menu>
        )
      }}
    </Query>
  )
}
