import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
export default () => {
  return (
    <div className='topnavbar-line'>
      <Header style={{ color: '#fff' }} as='h3'>
        <Icon style={{ color: '#fff' }} name='game' />
        <Header.Content>swf-games</Header.Content>
      </Header>
    </div>
  )
}
