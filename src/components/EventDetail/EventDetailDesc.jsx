import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const EventDetailDesc = ({event:{details}}) => {
  return (
    <Segment.Group>
      <Segment>
        <Header as='h4' dividing>Details</Header>
        <p>{details}</p>
      </Segment>
    </Segment.Group>
  )
}

export default EventDetailDesc