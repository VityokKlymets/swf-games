import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
export default ({ name, description, screenshot, category, createdAt }) => {
  const date = new Date(parseInt(createdAt))
  return (
    <Card centered>
      <Image src={screenshot} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{date.toLocaleDateString()}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
        <Card.Meta textAlign='right'>
          <Label color='green'>{category}</Label>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}
