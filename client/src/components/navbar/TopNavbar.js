import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
export default () => {
  return (
    <div className='topnavbar-content'>
      <Header style={{ color: '#fff' }} textAlign='center' icon as='h1'>
        <Icon style={{ color: 'rgb(90, 182, 15)' }} name='game' />
        <Header.Content>
          Вітаємо вас на нашому сайті!
          <Header.Subheader
            style={{
              paddingTop: '1.2em',
              color: '#e1e1e1'
            }}
          >
            тут ви знайдете кращі флеш ігри , які ви зможете пограти онлайн та без реєстрації
          </Header.Subheader>
        </Header.Content>
      </Header>
    </div>
  )
}
