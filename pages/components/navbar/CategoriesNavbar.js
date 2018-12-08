import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Link from 'next/link'
export default ({ style = {}, currentCategory = '', categories = [] }) => {
  const iconColor = 'black'
  return (
    <Menu style={{ ...style }} icon='labeled' stackable>
      {categories.map(cat => (
        <Link
          key={cat.value}
          href={{
            pathname: 'category',
            query: {
              cat: cat.value
            }
          }}
        >
          <Menu.Item name={cat.value} active={currentCategory === cat.value}>
            <Icon color={iconColor} name={cat.icon} />
            {cat.text}
          </Menu.Item>
        </Link>
      ))}
    </Menu>
  )
}
