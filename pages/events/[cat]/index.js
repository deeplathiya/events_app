import CatEvents from '../../../src/components/events/cat-event';

const Page = ({data,id}) => {
    return <CatEvents data={data} id={id}/>;
}

export default Page;

export async function getStaticPaths() {

    const { events_categories } = await import('/data/data.json')
    const allPaths = events_categories.map((cat) => {
        return {
            params: { cat: cat.id.toString(),
            }
        }
    })

    return {
      paths: allPaths,
      fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    console.log(context)
    const id  = context.params.cat
    const { allEvents } = await import('/data/data.json')
    const data = allEvents.filter((event) => event.city === id)
    console.log(data)
    return{
        props: {
                data : data,
                id: id
            }
        }
}