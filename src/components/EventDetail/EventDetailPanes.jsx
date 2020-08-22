import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import EventAttendeeAvatar from './EventAttendeeAvatar';

const EventDetailPanes = () => {
  const match = useHistory();

  const { attendees, interested } = useSelector(state => state.event.events.find(evt => evt.title === match.location.pathname.substr(8)));

  return ([
    {
      menuItem: `GOING (${attendees.length})`,
      render: () => (
        <Tab.Pane>
          {attendees.map(attendee => (
            <EventAttendeeAvatar key={attendee.id} attendee={attendee} />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: `INTERESTED (${interested.length})`,
      render: () => (
        <Tab.Pane>
          {interested.map(interest => (
            <EventAttendeeAvatar key={interest.id} attendee={interest} />
          ))}
        </Tab.Pane>
      )
    }
  ]);
}

export default EventDetailPanes;