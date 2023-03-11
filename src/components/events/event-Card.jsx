import React, {useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter} from 'next/router';

const EventCards = ({data}) => {

const emailInputRef = useRef();
const userrouter = useRouter();
const [message, setMessage] = useState(null);

// console.log(userrouter)  
// console.log(emailInputRef);
const onSubmit = async (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const id = userrouter.query.id;

    if(!enteredEmail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        setMessage('Please enter a valid email address');
    }

    try{
        const response = await fetch('/api/email-reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: enteredEmail,
                id: id
            })
            
        })
        

        if(!response.ok){
            throw new Error('Something went wrong')
        }
        const data = await response.json();
        setMessage(data.message);
        emailInputRef.current.value = '';
        // console.log(data);

    }catch (e) {
        console.log(e);
    }
};

       return( 
       <div className='event_single_page'>
            {
                data.map((event) => (
                    <>
                        <Link key={event.id} href={`/events/${event.city}/${event.id}`} passHref>
                            <h1>{event.title}</h1>
                            <Image width={1000} height={500} alt={event.title} src={event.image} />
                            <p>{event.description}</p>
                        </Link>
                        <form className="email_registration" onSubmit={onSubmit}>
                            <label> Get Registered for this event!</label>
                            <input
                            ref={emailInputRef} 
                            // type="email"
                            id="email"
                            placeholder="Please insert your email here"
                            />
                            <button type="submit"> Submit</button>
                        </form>
                        <p>{message}</p>
                    </>   
                ))
            }
        </div>
    );
};
  
  export default EventCards;