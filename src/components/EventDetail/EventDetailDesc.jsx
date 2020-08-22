import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const EventDetailDesc = ({event:{description}}) => {
  return (
    <Segment.Group>
      <Segment>
        <Header as='h4' dividing>Details</Header>
        <p>{description}</p>
      </Segment>
    </Segment.Group>
  )
}

export default EventDetailDesc