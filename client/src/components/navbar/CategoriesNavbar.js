import React, { useState } from 'react'
import { Menu, Icon, Loader } from 'semantic-ui-react'
import { GET_CATEGORIES } from '../../queries'
import { Query } from 'react-apollo'
export default () => {
  const [activeItem, setActiveItem] = useState('gamepad')
  const handleItemClick = (e, { name }) => setActiveItem(name)
  const iconColor = 'black'
  return (
    <Query query={GET_CATEGORIES}>
      {({ loading, data }) => {
        if (loading) return <Loader active inline='centered' />
        return (
          <Menu icon='labeled' stackable>
            <Menu.Item
              name='gamepad'
              active={activeItem === 'gamepad'}
              onClick={handleItemClick}
            >
              <Icon color={iconColor} name='gamepad' />
              Ігри
            </Menu.Item>
            {data.categories.map((cat, idx) => (
              <Menu.Item
                key={idx}
                name={cat.value}
                active={activeItem === cat.value}
                onClick={handleItemClick}
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
