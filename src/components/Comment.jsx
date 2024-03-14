import { Avatar, Divider, Flex , Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import Actions from './Actions';

const Comment = ({comment , createdAt , likes , userName , userAvatar}) => {
    const[liked , setLiked]=useState(false);
    
  return (
    <div>
        <Flex gap={4} py={2}  m={2} w={"full"}>
            <Avatar src={userAvatar} size={"sm"}/>
            <Flex gap={1} w={"full"} flexDirection={"column"}>
                <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                   <Text  fontSize={"sm"} fontWeight={"bold"}> {userName}</Text>
                   <Flex>
                    <Text fontSize={"sm"} color={"gray.dark"}> {createdAt}</Text>
                    <BsThreeDots/>
                   </Flex>
                </Flex>
                <Text> {comment}</Text>
                <Actions liked={liked} setLiked={setLiked}/>
                <Text fontSize={"sm"} color={"gray.dark"}>{likes}{+ (liked ?1 :0)} likes</Text>

            </Flex>
        </Flex>
        <Divider/>
    </div>
  )
}

export default Comment