import fs from 'fs';
import path from 'path';

const handler =(req,res) => {
    if(req.method === 'POST') {
        console.log("POST API")
        console.log(req.body);
        console.log(req.body.email);
        console.log(req.body.feedback);
        const email = req.body.email;
        const feedback = req.body.feedback;

        const  newFeedback = {
            id: new Date().toDateString(),
            email: email,
            text: feedback
        };

        // Store Data
       const filepath = path.join(process.cwd(),"data","feedback.json")
       const fileData = fs.readFileSync(filepath);
       let data = null
       try {
        data = JSON.parse(fileData);
       } catch(error) {
        data =[];
       }
       data.push(newFeedback);
       fs.writeFileSync(filepath,JSON.stringify(data));
       res.status(201).json({
        message: "Success",
        feedback: newFeedback
    })
    } else {
        res.status(200).json({
            message:"This works"
        })
    }
    
}

export default handler;