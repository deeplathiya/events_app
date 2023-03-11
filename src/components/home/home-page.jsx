import Image from 'next/image'
import Link from 'next/link'


export const HomePage = ({data}) => (
  <div className='home_body'>
    {
      data.map((cat) => (
        <Link className='card' key = {cat.id} href={`/events/${cat.id}`} passHref>
          <div className="img">
          <Image width = {400} height = {300} alt = {cat.title} src = {cat.image}/>
          </div>
           <div className='content'>
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
           </div>
        </Link>
        ))
    }
  </div>
);