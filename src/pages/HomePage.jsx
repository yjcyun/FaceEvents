import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { sampleData } from '../api/sampleData'
import EventDashboard from '../components/Home/EventDashboard';

const HomePage = () => {
  const [events] = useState(sampleData);

  return (
    <Container>
      <EventDashboard events={events} />
    </Container>
  )
}

export default HomePage