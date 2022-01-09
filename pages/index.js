import { getAllEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';
import Link from 'next/link';

function HomePage(props) {
  const featuredEvents = props.featuredEvents;

  console.log(featuredEvents);
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta  name="description=" content="find all good events"/>
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllEvents()
  return{
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 100
  }
}

export default HomePage;
