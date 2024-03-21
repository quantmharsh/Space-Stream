import { Avatar, AvatarBadge, Flex, Stack, WrapItem, useColorModeValue  ,Text, Image} from '@chakra-ui/react'
import React from 'react'

const Conversation = () => {
  return (
    <Flex
    gap={4}
    alignItems={"center"}
    p={"1"}
    _hover={{
        cursor:"pointer",
        bg:useColorModeValue("gray.600" ,"gray.dark"),
        color:"white"
    }}
    borderRadius={"md"}
    >
    {/* AVATAR ON LEFT SIDE WITH PIC OF USER */}
    <WrapItem>
        <Avatar size={{sm:"sm" ,base:"xs" ,md:"md"}} src='https://bit.ly/borken-link'>
           <AvatarBadge boxSize={"1em"} bg={"green.500"}/>
        </Avatar>
    </WrapItem>
    <Stack direction={"column"} fontSize={"small"}>
        <Text fontWeight={"700"} display={"flex"} alignItems={"center"} >
            Anjali <Image src= "./verified.png " w={4} h={4} ml={1}/>
        </Text>
        <Text fontSize={"xs"} display={"flex"}alignItems={"center"} gap={1}> Hello some messages ...</Text>


    </Stack>
    </Flex>
  )
}

export default Conversation