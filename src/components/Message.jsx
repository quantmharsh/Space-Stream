import { Button, Container, Box  ,Flex ,Text , Input, useColorMode, useColorModeValue, SkeletonCircle, Skeleton, Avatar } from "@chakra-ui/react";
import React from 'react'
import { useRecoilValue } from "recoil";
import { selectedConversationAtom } from "../atoms/messagesAtom";
import userAtom from "../atoms/userAtom";
import { BsCheck2All } from "react-icons/bs";

const Message = ({ownMessage  , message}) => {
  const selectedConversation =useRecoilValue(selectedConversationAtom);
  const currentUser= useRecoilValue(userAtom);
  return (
    <>
    {/* if we send message */}
    {ownMessage ?(
         <Flex gap={2}
         alignSelf={"flex-end"}>
          <Flex  bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}>
           <Text color={"white"}> {message.text} </Text>
           <Box alignSelf={"flex-end"}  ml={1} color={message.seen ? "blue.400" :""} fontWeight={"bold"}>
            <BsCheck2All size={16}/>

           </Box>
           </Flex>
           <Avatar w={7} h={7} src={currentUser.profilePic}/>
         </Flex>
    ):(
        // if we recive message
        <Flex gap={2}>
              <Avatar w={7} h={7} src={selectedConversation.userProfilePic}/>
           <Text maxW={"350px"}  bg={"gray.400"}  p={1} borderRadius={"md"}>{message.text}</Text>
         
         </Flex>
    )}
  
   </>
  )
}

export default Message