// import { Fragment,useEffect,useState } from 'react';
// import { useRouter } from 'next/router';

// import { getFilteredEvents } from '../../helpers/api-util';
// import EventList from '../../components/events/event-list';
// import ResultsTitle from '../../components/events/results-title';
// import Button from '../../components/ui/button';
// import ErrorAlert from '../../components/ui/error-alert';
// import useSWR from 'swr';

// //  With Client Side 
// function FilteredEventsPage(props) {
//   const router = useRouter();  
//   const [loadedEvents,setLoadedEvents] = useState([]);
//   const filterData = router.query.slug;

//   const fetcher = (url) => fetch(url)
//   .then((res) => res.json())
//   .then(data => {
//       const transformedSales=[];

//       for(const key in data) {
//                   transformedSales.push({
//                       id: key,
//                       ...data[key]
//                   });
//               }
//       return transformedSales;
//   })


//   const {data ,error} = useSWR("https://react-ef4bd-default-rtdb.firebaseio.com/events.json",fetcher)
//   useEffect(() => {
//     setLoadedEvents(data)
//   },[data])

//   if(!loadedEvents) {
//     return <p className="center">Loading....</p>
//   }

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   let filteredEvents = loadedEvents.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
//   });

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12 ||
//     error
//   ) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p>Invalid filter. Please adjust your values!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button link='/events'>Show All Events</Button>
//         </div>
//       </Fragment>
//     );
//   }


//   if (!filteredEvents || filteredEvents.length === 0) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p>No events found for the chosen filter!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button link='/events'>Show All Events</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const date = new Date(numYear, numMonth - 1);

//   return (
//     <Fragment>
//       <ResultsTitle date={date} />
//       <EventList items={filteredEvents} />
//     </Fragment>
//   );
// }

// export default FilteredEventsPage;




//+++++++++++++++++++++++++++
// It is with Server Side //
// ++++++++++++++++++++++++++++
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
  const router = useRouter();  
  const header = (
    <Head>
        <title>Filtered Events</title>
        <meta  name="description=" content={` Filtered: ${props.date.month}/${props.date.year}`}/>
      </Head>
  )

  if (
    props.hasError
  ) {
    return (
      <Fragment>
        {header}
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        {header}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
       {header}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  
  const {params} = context;
  
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true
      }
    }
  }

  const filteredEvents =  await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}
export default FilteredEventsPage;
