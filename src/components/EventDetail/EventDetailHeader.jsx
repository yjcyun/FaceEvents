import React from 'react'
import { Segment, Image, Item, Header, Button, Divider, Icon, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const EventDetailHeader = ({
  event: { category, title, hostedBy, date, city }
}) => {
  return (
    <Segment.Group>
      {/* Event Image */}
      <Segment basic attached='top' style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/${category}.jpg`} fluid />
      </Segment>
      {/* End of Event Image */}

      <Segment attached='bottom'>
        {/* Event name and hosted by */}
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='/assets/user.png' />
            <Item.Content>
              <Header
                size='huge'
                content={title}
              /><br />
              <Header sub>Hosted By {hostedBy}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
        {/* End of Event name and hosted by */}

        {/* Buttons */}
        <Button icon labelPosition='left' basic >
          <Icon name='heart' color='red' />INTERESTED
        </Button>
        <Button icon labelPosition='left' basic >
          <Icon name='check' color='green' />GOING
        </Button>
        <Button
          as={Link}
          to={`/manage/${title}`}
          floated='right'
        >
          MANAGE EVENT
        </Button>
        {/* End of Buttons */}

        <Divider />

        <Grid>
          {/* Event Date */}
          <Grid.Column width={1}>
            <Icon name='time' size='large' color='green' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{date}</span>
          </Grid.Column>
          {/* End of Event Date */}
          {/* Event Location */}
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='green' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{city}</span>
          </Grid.Column>
          {/* Event Location */}
        </Grid>
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailHeader