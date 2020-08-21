import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const EventDetailPanes = [
  {
    menuItem: `GOING (2)`,
    render: () => (
      <Tab.Pane>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
      </Tab.Pane>
    )
  },
  {
    menuItem: `INTERESTED (4)`,
    render: () => (
      <Tab.Pane>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
        <div className='event-attendees'>
          <Image avatar src='/assets/user.png' />
        </div>
      </Tab.Pane>
    )
  }
]

export default EventDetailPanes;