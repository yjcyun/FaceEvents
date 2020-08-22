import React from 'react'
import { Image } from 'semantic-ui-react'

const EventAttendeeAvatar = ({ attendee }) => {
  return (
    <div className='event-attendees' key={attendee.id}>
      <Image avatar src={attendee.photoURL} />
    </div>
  );
}

export default EventAttendeeAvatar