import AllEvents from '../../src/components/events/events-page';

const Page = ({data}) => {
    return <AllEvents data={data} />;
}

export async function getStaticProps(context) {
    const { events_categories } = await import('/data/data.json')
    return {
      props: {
        data: events_categories
      }, // will be passed to the page component as props
    }
}

export default Page;