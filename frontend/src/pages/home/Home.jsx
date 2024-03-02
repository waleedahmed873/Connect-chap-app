import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md bg-[#626769]'>
			<Sidebar />
			<MessageContainer />
		</div>
  )
}

export default Home