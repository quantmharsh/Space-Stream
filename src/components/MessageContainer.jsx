import React, { useEffect, useState } from 'react'
import { Button, Container, Box  ,Flex ,Text , Input, useColorMode, useColorModeValue, SkeletonCircle, Skeleton, Avatar, Image, Divider } from "@chakra-ui/react";
import Message from './Message';
import MessageInput from './MessageInput';
import useShowToast from '../hooks/useShowToast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedConversationAtom } from '../atoms/messagesAtom';
import userAtom from '../atoms/userAtom';


const MessageContainer = () => {
  const showToast= useShowToast();
  const[selectedConversation , setSelectedConversation]=useRecoilState(selectedConversationAtom)
  const[loadingMessages , setLoadingMessages]=useState(true);
  const[messages , setMessages]=useState([])
  const currentUser= useRecoilValue(userAtom)
  useEffect(() => {
    const getMessages=async()=>{
      setLoadingMessages(true);
      setMessages([]);
      try {
        if(selectedConversation.mock)
        {
          return;
        }

         const res= await fetch(`/api/messages/${selectedConversation.userId}`)
         const data=  await res.json();
         if(data.error)
         {
          showToast("Error" ,data.error ,"error")
          return;
         }
         console.log("data in getMessages",data);
         setMessages(data)
      } catch (error) {
        showToast("Error" , error.message , "error");
        
      }
      finally{
          setLoadingMessages(false);
      }
    }
    getMessages();
   
  }, [showToast , selectedConversation.userId ])
  
  return (
    <Flex flex={70}  bg={useColorModeValue("gray.200" ,"gray.light")}
    borderRadius={"md"}
    flexDirection={"column"}
    p={2}
    
    >
    <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
        <Avatar src={selectedConversation.userProfilePic} size={"sm"}/>
        <Text display={"flex"} alignItems={"center"} >{selectedConversation.username} <Image src='/verified.png' w={4} h={4} ml={1} /> 
        </Text>

    </Flex>
    <Divider/>
    <Flex flexDir={"column"} gap={4} my={4} height={"400px"} overflowY={"auto"} p={2}>
        {loadingMessages &&(
              [0,1,2,3,4,5,6,7,8,9,10,11,12].map((_,i)=>(
                <Flex key={i} alignItems={"center"} gap={2} p={"1"} borderRadius={"md"} alignSelf={i%2===0?"flex-start":"flex-end"}> 
                    {i%2===0 && <SkeletonCircle size={7}/>}
                    <Flex flexDir={"column"} gap={2}> 
                    <Skeleton h={"8px"} width={"250px"}/>
                    <Skeleton h={"8px"} width={"250px"}/>
                    <Skeleton h={"8px"} width={"250px"}/>
                    
                    </Flex>
                    {i%2!==0 && <SkeletonCircle size={7}/>}
                    </Flex>
                  
              
               ))
        )}
       {!loadingMessages && (
        messages.map((message)=>(
          <Message  key={message._id}  message={message} ownMessage={currentUser._id === message.sender} />
       
        ))
       )}
       
         </Flex>
         <MessageInput  setMessages={setMessages} />

    </Flex>
  )
}

export default MessageContainer