import { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from '../../dummy-data'
import { Fragment } from "react";
import EventSummary from '../components/event-detail/event-summary'
import EventLogistics from '../components/event-detail/event-logistics'
import EventContent from '../components/event-detail/event-content'
import ErrorAlert from "../components/layout/error-alert";

const EventDetail :NextPage = () => {
    const router  = useRouter();
    const {eventId}  = router.query;
    const event = getEventById(eventId)
    console.log(event)
    if(!event) {
        return <ErrorAlert>
            <p>No Event found!!</p>
        </ErrorAlert>
    }

    return <Fragment>
        <EventSummary title ={event.title}/>
        <EventLogistics date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>    
    </Fragment>
}

export default EventDetail;