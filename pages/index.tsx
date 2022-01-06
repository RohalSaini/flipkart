import type { NextPage } from 'next';
import Link from 'next/link';
import { getFeaturedEvents } from '../dummy-data';
import classes from './../styles/Nav.module.scss';
import EventList from './components/events/event-list';

const Home: NextPage = () => {
  const featureEvents = getFeaturedEvents();
  //console.log(featureEvents);
  return (
    <div>
        <ul>
          <EventList items ={featureEvents}/>
        </ul>
    </div>
  )
}

export default Home
