import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EventItems from './EventItems'

const EventDashboard = ({ events }) => {
  return (
    <Grid columns={4} >
      <Grid.Row>
        {events.map(event => (
          <Grid.Column as={Link} to={`/events/${event.title}`} key={event.id}>
            <EventItems event={event} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}

export default EventDashboard
