import path from 'path';
import fs from 'fs';

function buildPath(){
    return path.join(process.cwd(), 'data', 'data.json');
}

function extractPath(file){
    const jsonData = fs.readFileSync(file);
    const data = JSON.parse(jsonData);
    return data;
}

const file = buildPath();
const {events_categories, allEvents} = extractPath(file);
 

export default function handler(req, res) {

    const {method} = req;

    if(!allEvents){
        return res.status(404).json({message: 'No events found'});
    }

    if (method === 'POST') {
        console.log(req.body);
        const {email, id} = req.body;

        if (!email | !email.includes('@')) {
            res.status(422).json({ message: 'Invalid email address' });
        }

        const newEvents = allEvents.map(event => {
            if(event.id === id){
                if(event.emails_registered.includes(email)){
                    res.status(401).json({message: 'Email already registered'});
                    return event;
                }
                return {...event, emails_registered: [...event.emails_registered, email]}
            }
            return event;
        });
        
        fs.writeFileSync(file, JSON.stringify({events_categories, allEvents: newEvents}));
        return res.status(200).json({message: 'success'});

    } 
    
}