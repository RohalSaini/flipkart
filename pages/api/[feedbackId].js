import path from 'path';
import fs from 'fs';

const handler = (req,res) => {
  if(req.method === "GET") {
    console.log(req.query.feedbackId);
    const feedbackId =req.query.feedbackId;
    const filepath = path.join(process.cwd(),"data","feedback.json")
    const fileData = fs.readFileSync(filepath);
    let data = null
    try {
     data = JSON.parse(fileData);
    } catch(error) {
     data =[];
    }

    const selectedFeedback =
        data.find(feedback => feedback.id === feedbackId)
   res.status(200).json( {
       feedback: selectedFeedback
   })  
  }
}

export default handler;