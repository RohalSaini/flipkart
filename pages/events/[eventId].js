import { Fragment } from 'react';
import Head from 'next/head';

import { getEventById,getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';


function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return (
      <div className="center">
        <p>Loading.....!</p>
      </div>
    );
  }

  return (
    <Fragment>
       <Head>
        <title>{event.title}</title>
        <meta  name="description=" content="find all good events"/>
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const id = context.params.eventId
  const event = await getEventById(id)
  if(!event) {
    return {
      props: {
        notFound: true
      }
    }
  }
  return {
    props: {
      event: event
    },
    revalidate: 30
  }
} 

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map(event => ({
    params: {eventId: event.id}
  }))
  return {
    paths: paths,
    fallback: 'blocking'
  }
}


export default EventDetailPage;
