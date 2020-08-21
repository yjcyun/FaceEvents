import React from 'react'
import { Form, Segment, Grid } from 'semantic-ui-react'

const CreateEventPage = () => {
  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Segment>
          <Form>
            <Form.Field>
              <label>Event Title</label>
              <input
                type="text"
                name='title'
                placeholder='Event title'

              />
            </Form.Field>
            <Form.Field>
              <label>Category</label>
              <input
                type="text"
                name='category'
                placeholder='Category'
              />
            </Form.Field>
            <Form.Field>
              <label>Details</label>
              <textarea
                name='details'
                placeholder='Details'
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                type="text"
                name='city'
                placeholder='City'
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                type="text"
                name='venue'
                placeholder='Venue'
              />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <input
                type="date"
                name='date'
                placeholder='Date'
              />
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default CreateEventPage
