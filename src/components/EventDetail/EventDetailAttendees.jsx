import React from 'react'
import { Tab } from 'semantic-ui-react'
import EventDetailPanes from './EventDetailPanes'

const EventDetailAttendees = () => {
  return (
    <Tab panes={EventDetailPanes} />
  )
}

export default EventDetailAttendees