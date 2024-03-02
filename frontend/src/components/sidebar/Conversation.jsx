import React from 'react'
import useConversation from "../../store/useConversation";
import { useSocketContext } from '../../context/SocketContext';


const Conversation = ({conversation,lastIdx}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
    <div className={`flex gap-2 items-center rounded-2xl p-2 py-1 cursor-pointer hover:bg-gray-600
    ${isSelected ? "bg-gray-600" : ""}
    `}
    onClick={() => setSelectedConversation(conversation)}
    >

        <div className= {`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar' />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap justify-between'>
                <p className='font-bold text-gray-300'>{conversation.fullName}</p>
                {/* <span className='text-xl'>🌹</span> */}
            </div>
        </div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default Conversation