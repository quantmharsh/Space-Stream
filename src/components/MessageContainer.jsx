import React from 'react'
import { Button, Container, Box  ,Flex ,Text , Input, useColorMode, useColorModeValue, SkeletonCircle, Skeleton, Avatar, Image, Divider } from "@chakra-ui/react";
import Message from './Message';
import MessageInput from './MessageInput';


const MessageContainer = () => {
  return (
    <Flex flex={70}  bg={useColorModeValue("gray.200" ,"gray.light")}
    borderRadius={"md"}
    flexDirection={"column"}
    p={2}
    
    >
    <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
        <Avatar src='' size={"sm"}/>
        <Text display={"flex"} alignItems={"center"} > Harsh <Image src='/verified.png' w={4} h={4} ml={1} /> 
        </Text>

    </Flex>
    <Divider/>
    <Flex flexDir={"column"} gap={4} my={4} height={"400px"} overflowY={"auto"} p={2}>
        {false &&(
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
        <Message ownMessage={true}/>
        <Message ownMessage={false}/>
        <Message ownMessage={false}/>
        <Message ownMessage={true}/>
         </Flex>
         <MessageInput/>

    </Flex>
  )
}

export default MessageContainer