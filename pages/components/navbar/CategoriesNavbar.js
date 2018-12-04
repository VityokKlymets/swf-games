import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
export default ({ style = {}, currentCategory = '', categories = [] }) => {
  const iconColor = 'black'
  return (
    <Menu style={{ ...style }} icon='labeled' stackable>
      {categories.map((cat, idx) => (
        <Menu.Item
          as='a'
          href={`/category?cat=${cat.value}`}
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
}
