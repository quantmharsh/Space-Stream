import React from "react";
import { Button, Container, Box  ,Flex ,Text , Input, useColorMode, useColorModeValue, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Conversation from "../components/Conversation";
import {GiConversation} from "react-icons/gi";
import MessageContainer from "../components/MessageContainer";
const ChatPage = () => {
  
	return (
		<Box
			position={"absolute"}
			left={"50%"}
			w={{lg:"750px" ,
    md:"80%",
  base:"100%"}}
  padding={4}
			// border={"1px solid pink"}
			transform={"translateX(-50%)"}>
			<Flex
      gap={4}
      flexDirection={{base:"column", md:"row"}}
      maxW={{
        sm:"400px",
        md:"full"
      }}
      mx={"auto"}
      
      >
        
        {/* for coversation */}
        <Flex
         flex={30} gap={2} flexDirection={"column"}maxW={{sm:"250px" , md:"full"}} mx={"auto"}>
             <Text fontWeight={700} color={useColorModeValue("gray.600" , "gray.400")}> Your chat appears here</Text>
             <form>
              <Flex alignItems={"center"} gap={2}>
                <Input placeholder="Search for a user"/>
<Button size={"sm"}> <SearchIcon/> </Button>
              </Flex>
             </form>
             {true && 
             [0,1,2,3,4].map((_,i)=>(
              <Flex key={i} alignItems={"center"} gap={4} p={"1"} borderRadius={"md"}> 
                <Box>
                  <SkeletonCircle size={10}/>
                </Box>
                <Flex w={"full"} flexDirection={"column"} gap={3}> 
                  <Skeleton h={"10px"} w={"80px"}/>
                  <Skeleton  h={"8px"} w={"90%"}/>
                  </Flex>
                
              </Flex>
             ))
              
              }
              <Conversation/>
              <Conversation/>
              <Conversation/>
        </Flex>
        {/* <Flex flex={70} borderRadius={"md"} p={2} flexDir={"column"} alignItems={"center"} justifyContent={"center"} height={"400px"}>
            <GiConversation size={100}/>
            <Text fontSize={20 }> Select a conversation to start messaging</Text>
        </Flex> */}
        {/* message container */}
        <Flex flex={70}> 
        <MessageContainer/>
         </Flex>


        
      </Flex>
		</Box>
	);
};

export default ChatPage;
