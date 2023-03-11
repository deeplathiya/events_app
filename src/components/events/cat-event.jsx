import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CatEvents = ({ data, id}) => (
        <div className='cat_event'>
            <h1>Events in {id}</h1>
            <div className='content'>
                {data.map((event) => (
                    <Link key = {event.id} href={`/events/${event.city}/${event.id}`} className = 'card' passHref>
                        <h2>{event.title}</h2>
                        <Image width={300} height={300} alt={event.title} src={event.image} />
                        <p>{event.description}</p>
                    </Link>
                ))}
            </div>
        </div>
);
  
  export default CatEvents;