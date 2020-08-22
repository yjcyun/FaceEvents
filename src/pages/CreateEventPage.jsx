import React, { useState } from 'react'
import cuid from 'cuid';
import { Form, Segment, Grid, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { updateEvent, createEvent } from '../redux/events/eventAction';
import { Link } from 'react-router-dom';

const CreateEventPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const selectedEvent = useSelector(state => state.event.events.find(evt => evt.title === match.params.id));

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    details: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values, setValues] = useState(initialValues);

  // Handle form submit
  const handleFormSubmit = () => {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(createEvent({
        ...values,
        id: cuid(),
        hostedBy: 'Mars',
        attendees: [],
        hostPhotoURL: '/assets/user.png'
      }));
    history.push('/');
  }

  // Handle input change
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Grid centered columns={2} >
      <Grid.Column>
        <Segment clearing>
          <Form onSubmit={handleFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                type="text"
                name='title'
                placeholder='Event title'
                onChange={e => handleInputChange(e)}
                value={values.title}
              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <input
                type="text"
                name='category'
                placeholder='Category'
                onChange={e => handleInputChange(e)}
                value={values.category}
              />
            </Form.Field>
            <Form.Field>
              <label>Details</label>
              <textarea
                name='details'
                placeholder='Details'
                onChange={e => handleInputChange(e)}
                value={values.details}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                type="text"
                name='city'
                placeholder='City'
                onChange={e => handleInputChange(e)}
                value={values.city}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                type="text"
                name='venue'
                placeholder='Venue'
                onChange={e => handleInputChange(e)}
                value={values.venue}
              />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <input
                type="date"
                name='date'
                placeholder='Date'
                onChange={e => handleInputChange(e)}
                value={values.date}
              />
            </Form.Field>
            <Button type='submit' floated='right' color='black' content='Submit' />
            <Button
              as={Link}
              to='/'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default CreateEventPage