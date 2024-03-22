import React from 'react'
import Trending from '../components/Trending'
import UpcomingMovie from '../components/UpcomingMovie'

const Home = () => {
  return (
      <div className='flex flex-col gap-6'>
      <Trending />
      <UpcomingMovie/>
    </div>
  )
}

export default Home