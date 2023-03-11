import React from 'react';
import EventCards from '../../../src/components/events/event-Card';


const Page = ({data}) => (
    <EventCards data={data}/>
);

export async function getStaticPaths() {

    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map((event) => {
        return {
            params: {
                cat : event.city.toString(), 
                id: event.id.toString(),
            }
        }
    })

    return {
      paths: allPaths,
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const id  = context.params.id
    const { allEvents } = await import('/data/data.json')
    const data = allEvents.filter((event) => event.id === id)
    console.log(data)
    return{
        props: {
                data : data,
            }
        }
}

export default Page;