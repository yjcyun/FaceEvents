import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const EventItems = ({
  event: { hostPhotoURL, date, title, attendees }
}) => {
  return (
    <Card className='event-card'>
      <Image src={hostPhotoURL} wrapped ui={false} />
      <Card.Content>
        <Card.Description className='event-desc'>{date}</Card.Description>
        <Card.Header>{title}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {attendees.length} Attendees
      </Card.Content>
    </Card>
  )
}

export default EventItems