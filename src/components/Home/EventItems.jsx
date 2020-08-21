import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const EventItems = ({ event}) => {
  return (
    <Card className='event-card'>
      <Image src={event.hostPhotoURL} wrapped ui={false} />
      <Card.Content>
        <Card.Description className='event-desc'>{event.date}</Card.Description>
        <Card.Header>{event.title}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
          22 Attendees
      </Card.Content>
    </Card>
  )
}

export default EventItems
