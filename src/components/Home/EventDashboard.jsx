import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'

const EventDashboard = () => {
  return (
    <Grid columns={4} >
      <Grid.Row>
        <EventList/>
      </Grid.Row>
    </Grid>
  )
}

export default EventDashboard
