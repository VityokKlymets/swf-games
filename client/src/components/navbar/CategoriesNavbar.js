import React, { useState } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
export default () => {
  const [activeItem, setActiveItem] = useState('gamepad')
  const handleItemClick = (e, { name }) => setActiveItem(name)
  return (
    <Menu icon='labeled' stackable>
      <Menu.Item
        name='gamepad'
        active={activeItem === 'gamepad'}
        onClick={handleItemClick}
      >
        <Icon color='teal' name='gamepad' />
        Games
      </Menu.Item>

      <Menu.Item
        name='video camera'
        active={activeItem === 'video camera'}
        onClick={handleItemClick}
      >
        <Icon color='teal' name='video camera' />
        Channels
      </Menu.Item>

      <Menu.Item
        name='video play'
        active={activeItem === 'video play'}
        onClick={handleItemClick}
      >
        <Icon color='teal' name='video play' />
        Videos
      </Menu.Item>
    </Menu>
  )
}
