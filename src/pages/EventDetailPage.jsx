import React from 'react'
import EventDetailHeader from '../components/EventDetail/EventDetailHeader'
import { Grid } from 'semantic-ui-react'

const EventDetailPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader />
      </Grid.Column>
      <Grid.Column width={6}>

      </Grid.Column>
    </Grid>
  )
}

export default EventDetailPage