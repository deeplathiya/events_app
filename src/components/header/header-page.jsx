import Link from 'next/link'
import Image from 'next/image'

export const HeaderPage = () => (
    <header>
      <div className='topNav'>
        <Image alt = "logo" src ={'/images/logo_black.png'} height = {50} width = {50}/>
        <nav>
          <ul>
            <li>
              <Link className='link' href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className='title'>Events in City</p>
        
    </header>
)