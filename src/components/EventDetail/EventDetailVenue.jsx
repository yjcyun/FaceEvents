import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const EventDetailVenue = ({event:{venue}}) => {
  return (
    <Segment.Group>
      <Segment>
        <Header as='h4' dividing>Event Venue</Header>
        <p>{venue}</p>
      </Segment>
    </Segment.Group>
  )
}

export default EventDetailVenue