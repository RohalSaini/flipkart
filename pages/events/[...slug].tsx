import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents} from '../../dummy-data'
import EventList from "../components/events/event-list";
import ResultsTitle from '../components/events/results-title'
import Button from "../components/ui/button";
import ErrorAlert from '../components/layout/error-alert';

const FilteredEvents: NextPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(filterData);
    if(!filterData) {
        return<p className="center">Loading...</p>
    }

    const filteredYear = +filterData[0]
    const filteredMonth = +filterData[1]

    if(
        isNaN(filteredYear) || 
        isNaN(filteredMonth) || 
        filteredYear> 2030 || 
        filteredYear<2021 || 
        filteredMonth<1 || 
        filteredMonth>12) {
            return <Fragment>
                   <ErrorAlert>
                   <p>InValid User please adjust values!</p>
                   </ErrorAlert>
                    
                    <div className="center">
                        <Button link="/events">Show All Events</Button>
                    </div>
                </Fragment>
                
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    console.log(filteredEvents);
    if(!filteredEvents || filteredEvents.length ===0) {
        return <Fragment>
            <ErrorAlert>
            <p> No events found for the chose filter!</p>
            </ErrorAlert>
           
            <div className="center">
            <Button link="/events">Show All Events</Button>
            </div>
            
            </Fragment>
    }

    const date = new Date(filteredYear,filteredMonth-1)


    return (
        <Fragment>
            <ResultsTitle date ={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default FilteredEvents;