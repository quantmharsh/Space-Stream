import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {IoSendSharp} from "react-icons/io5"
import React, { useState } from 'react'

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { conversationsAtom, selectedConversationAtom } from '../atoms/messagesAtom';
import useShowToast from '../hooks/useShowToast';


const MessageInput = ({setMessages}) => {
  const[messageText , setMessageText]=useState('');
  const selectedConversation= useRecoilValue(selectedConversationAtom)
  const showToast= useShowToast();
  const setConversations=useSetRecoilState(conversationsAtom)
  const handleSendMessage= async()=>{
    // if input  field is empty  then return
    if(!messageText)
    {
      return;
    }
    try {
      const res= await fetch('/api/messages',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          message:messageText,
          recipientId:selectedConversation.userId
        })

      })
       const data= await res.json();
       if(data.error)
       {
        showToast("Error" ,data.error ,"error");
        return;
       }
       console.log("Data in handlesend message " , data);
       setMessages((messages)=>[...messages , data ]);
       //also update the lastmessage at left part where all chats are theres
       setConversations(prevConvs  =>{
        const updatedConversations = prevConvs.map(conversation => {
          if(conversation._id===selectedConversation._id)
          {
            return {
              ...conversation,
              lastMessage:{
                text:messageText,
                sender:data.sender
              }
            }
          }
          return conversation
        })
        return updatedConversations;
       })
       setMessageText("")
       return;

      
    } catch (error) {
      showToast("Error" ,error.message,"error");
      
    }

  }
  return (
   <form onSubmit={handleSendMessage}>
    <InputGroup >
    <Input w={"full"} placeholder='Type a message...' onChange={(e)=>setMessageText(e.target.value) } value={messageText}/>
    <InputRightElement>
    <IoSendSharp color="green.500"  onClick={handleSendMessage} cursor={"pointer"}/>
    </InputRightElement>
    </InputGroup>
   </form>
  )
}

export default MessageInput