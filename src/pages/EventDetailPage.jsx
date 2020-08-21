import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailHeader from '../components/EventDetail/EventDetailHeader'
import EventDetailAttendees from '../components/EventDetail/EventDetailAttendees'
import EventDetailDesc from '../components/EventDetail/EventDetailDesc'
import EventDetailVenue from '../components/EventDetail/EventDetailVenue'
import EventDetailComments from '../components/EventDetail/EventDetailComments'

const EventDetailPage = () => {
  return (
    <Grid>
      <Grid.Column width={8}>
        <EventDetailHeader />
        <EventDetailDesc />
        <EventDetailVenue />
      </Grid.Column>
      <Grid.Column width={8}>
        <EventDetailAttendees />
        <EventDetailComments />
      </Grid.Column>
    </Grid>
  )
}

export default EventDetailPage