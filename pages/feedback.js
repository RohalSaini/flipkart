import { Fragment, useRef, useState } from "react";
import Button from "../components/ui/button";

const Feedback =() => {
    const emailRef = useRef();
    const feedbackRef = useRef();

    const [feedbackData,SetfeedbackData] = useState();
    const [feedbackItems,SetfeedbackItems] = useState([]);

    async function loadFeedbackHadler(id) {
        const data = fetch(`/api/${id}`)
                    .then(data => data.json())
                    .then(data => {
                        console.log(data)
                        SetfeedbackData(data.feedback)
                    })
    }
    function feedbackformHandler(event) {
        event.preventDefault();

        const email = emailRef.current.value;
        const feedback = feedbackRef.current.value;
        const reqBody = {
            email: email,
            feedback: feedback
        }

        fetch('/api/feedback', {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin":"*",
                'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Access-Control-Allow-Credentials': true
            }
        })
        .then(response => response.json())
        .then(data => {
            const feedbacks = data.feedback;
            SetfeedbackItems(feedbacks)
        })
        .catch(error => {
            console.log(error)
        })

    }
    function getAPIData() {
     fetch('/api/feedback')
        .then(response => response.json())
        .then(data => {
            console.log(data.feedback);
            SetfeedbackItems(data.feedback);
        })
        .catch(error => {
            console.log(error);
        })
    }

 return(
     <Fragment>
     <div>
         <h1>Feedback form</h1>
         <form onSubmit={feedbackformHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input htmlFor="email" id="emial" ref={emailRef}></input>
            </div>
            <div>
                <label htmlFor="feedback">FeedBAck</label>
                <textarea row="5" id="feedback" ref={feedbackRef}></textarea>
            </div>
            <Button onSubmit>Add Feedback</Button>
         </form>
         <hr/>

         <button onClick={getAPIData}> Load Feedbacks
         </button>
         <ul>
             {feedbackItems.map(item => <li key={item.id}>{item.text}<Button  onClick={loadFeedbackHadler.bind(null,item.id)}>Show Detail</Button> </li>)}   
        </ul>
        <div>{ feedbackData && <p>{feedbackData.email}</p>}</div>
     </div>
     </Fragment>
 )
} 

export default Feedback;