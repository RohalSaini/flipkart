import { NextPage } from "next"
import {getAllEvents} from './../../dummy-data';
import EventList from "../components/events/event-list";
import EventsSearch from '../components/events/events-search'
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage:NextPage =()  => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventHandler =(year:any,month:any) => {
        const fullPath = `/events/${year}/${month}`
        console.log("clicked")
        router.push(fullPath)
    }
    return <Fragment>
        <EventsSearch onSearch={findEventHandler}/>
        <EventList items={events}/>
    </Fragment>
}

export default AllEventsPage;