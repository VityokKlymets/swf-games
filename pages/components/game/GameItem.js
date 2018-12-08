import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import Link from 'next/link'
export default ({
  id,
  name,
  description,
  screenshot,
  category,
  createdAt,
  centered = false
}) => {
  const date = new Date(parseInt(createdAt))
  return (
    <Link href={{ pathname: 'game', query: { id } }}>
      <Card centered={centered}>
        <Image src={screenshot} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className='date'>{date.toLocaleDateString()}</span>
          </Card.Meta>
          <Card.Description textAlign='left'>{description}</Card.Description>
          <Card.Meta
            style={{
              paddingTop: '1em'
            }}
            textAlign='right'
          >
            {category && <Label color='green'>{category}</Label>}
          </Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  )
}
