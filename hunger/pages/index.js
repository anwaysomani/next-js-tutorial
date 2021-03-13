import Head from 'next/head'
import Navigation from "../components/navigation";
import Diffy from "../components/diffy";
import styles from '../styles/index.module.css'

export default function Home() {
  // var diffy_render = {
  //
  // }

  return (
    <div>
      <div className='background-image w-100 h-100 text-white'>
        <Head>
          <title>La Faim</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Navigation/>
        <hr/>

        {/* restaurant title */}
        <div className='text-upper'>
          <div className='text-center top-40 position-absolute w-100 font-2-5'>Restaurant</div>
          <div className='text-center position-absolute w-100 top-45 font-7'>Hungry People</div>
          <div className='w-100 top-67 position-absolute'>
            <hr className={['w-10 ', styles.hr_border_2].join(' ')}/>
          </div>
        </div>
      </div>

      {/* About Us */}
      {/*<div className='background-white w-100 h-100'>*/}
      {/*  <Diffy children={[{*/}
      {/*    'title': 'Sample Title'},*/}
      {/*    {*/}
      {/*      'title': 'Sample 2 Title'*/}
      {/*    }]} />*/}
      {/*</div>*/}
    </div>
  )
}
