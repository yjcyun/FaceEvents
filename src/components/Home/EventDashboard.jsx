import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventItems from './EventItems'
import { Link, useHistory } from 'react-router-dom'

const EventDashboard = ({ events }) => {
  const history = useHistory();
  console.log(history);

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
