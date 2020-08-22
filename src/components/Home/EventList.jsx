import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventItems from './EventItems'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EventList = () => {
  const { events } = useSelector(state => state.event);

  return (
    <>
      {events.map(event => (
        <Grid.Column as={Link} to={`/events/${event.title}`} key={event.id}>
          <EventItems event={event} />
        </Grid.Column>
      ))}
    </>
  )
}

export default EventList
