import fs from 'fs';
import path from 'path'

const AllFeedback = (props) => {
    console.log("DATA from JSON is");
    console.log(props.feedbacks);
    return ( 
        <ul>
        {props.feedbacks.map(item => <li key={item.id}>{item.text}</li>)}   
   </ul>
    )
}

export const getStaticProps = () => {
    const filepath = path.join(process.cwd(),"data","feedback.json")
       const fileData = fs.readFileSync(filepath);
       let data = null
       try {
        data = JSON.parse(fileData);
       } catch(error) {
        data =[];
       }

    console.log("DATA IS ")
    console.log(data);
    return {
        props : {
            feedbacks: data
        }
    }
}

export default AllFeedback;