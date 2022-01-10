import { useRef } from "react";
import Button from "../components/ui/button";

const Feedback =() => {
    const emailRef = useRef();
    const feedbackRef = useRef();

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
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        })

    }

 return(
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
     </div>
 )
} 

export default Feedback;