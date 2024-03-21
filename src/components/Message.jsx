import { Button, Container, Box  ,Flex ,Text , Input, useColorMode, useColorModeValue, SkeletonCircle, Skeleton, Avatar } from "@chakra-ui/react";
import React from 'react'

const Message = ({ownMessage}) => {
  return (
    <>
    {/* if we send message */}
    {ownMessage ?(
         <Flex gap={2}
         alignSelf={"flex-end"}>
           <Text maxW={"350px"}  bg={"blue.400"}  p={1} borderRadius={"md"}>  ernatur nulla mo aut itaququare, sed fugiat deleniti voluptates rerum atque a quo sequi aliquid ipsa id sapiente magnam id consequuntur repellat?</Text>
           <Avatar w={7} h={7} src=""/>
         </Flex>
    ):(
        // if we recive message
        <Flex gap={2}>
              <Avatar w={7} h={7} src=""/>
           <Text maxW={"350px"}  bg={"gray.400"}  p={1} borderRadius={"md"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ratione magnam id consequuntur repellat?</Text>
         
         </Flex>
    )}
  
   </>
  )
}

export default Message