import { Avatar, Flex ,Text , Image , Box, Divider, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from '../components/Actions'
import Comment from '../components/Comment'

const PostPage = () => {
  const[liked , setLiked]=useState(false)
  return (
    <>
   <Flex>
    <Flex w={"full"} alignItems={"center"} gap={3}>
      <Avatar src='/zuck-avatar.png' size={"md"} name="mark zuckerberg"/>
      <Flex>
           <Text fontSize={"sm"} fontWeight={"bold"}> mark zuckerberg</Text>
           <Image src='/verified.png' w={4} h={4} ml={4}/>
      </Flex>
    


    </Flex>
    <Flex gap={4} alignItems={"center"}>
      <Text fontSize={"sm"} color={"gray.light"}>
          1d
      </Text>
      <BsThreeDots/>
    </Flex>
   </Flex>
   <Text my={3}>👋 Lets talk about posts.</Text>
   <Box
						borderRadius={6}
						overflow={"hidden"}
						border={"1px solid"}
						borderColor={"gray.light"}>
						<Image src='/post1.png' w={"full"} />
					</Box>
           <Flex>
            <Actions liked={liked} setLiked={setLiked}/>
           </Flex>
           {/* for reply and likes count */}
           <Flex gap={2} alignItems={"center"}> 
            <Text color={"gray.dark"} fontSize={"sm"}>238 replies</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.dark"} ></Box>
            <Text color={"gray.dark"} fontSize={"sm"}>{500+(liked? 1:0)} likes</Text>
           </Flex>
           <Divider my={4} />
           <Flex justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"2xl"}>👋</Text>
              <Text color={"gray.dark"}> Get the app to reply , like , post</Text>
            </Flex>
            <Button>Get</Button>

           </Flex>
           <Divider/>
           <Comment comment="nice pic" createdAt="2d" likes={21} userName={"harsh"} userAvatar={'https://bit.ly/dan-abramov'}/>
           <Comment comment="Awesome click" createdAt="1d" likes={12} userName={"aman"} userAvatar={'https://bit.ly/kent-c-dodds'}/>
           <Comment comment="congratulations for achivement" createdAt="3d" likes={50} userName={"nihal"} userAvatar={'https://bit.ly/code-beast'}/>
   </>
  )
}

export default PostPage