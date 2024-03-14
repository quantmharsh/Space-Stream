import { Flex, VStack, Box, Avatar, Text, Center, Link, MenuButton, Portal, MenuItem, MenuList  , Menu} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import {BsInstagram} from"react-icons/bs";
import{CgMoreO} from "react-icons/cg";
import React from "react";

const UserHeader = () => {
    const toast= useToast();
    const copyURL=()=>{
        const currentUrl= window.location.href;
        navigator.clipboard.writeText(currentUrl).then(()=>{
            toast({
                title: 'Link Copied',
                description: "Profile Link Copied",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            
        })
    }
	return (
		<VStack gap={4} alignItems={"start"}>
			<Flex justifyContent={"space-between"} w={"full"}>
				<Box>
					<Text fontSize={"2x1"}>Mark Zuckerberg</Text>
					<Flex gap={2} alignItems={"center"}>
						<Text fontSize={"sm"} fontWeight={"bold"}>
						 markzuckerberg
						</Text>
						<Text
							fontSize={"xs"}
							color={"gray.light"}
							bg={"gray.dark"}
							p={1}
							borderRadius={"full"}>
							threads.net
						</Text>
					</Flex>
				</Box>
				{/* for avatar */}
				<Box>
					<Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" size={"xl"} />
				</Box>
			</Flex>
            <Text>
                Co-Founder executive chairman and CEO of Meta Platforms 
            </Text>

            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex 
                gap={2}
                alignItems={"center"}
                >
                    <Text
                    color={"gray.dark"} >3.2k Followers</Text>
                    <Box w={1} h={1} borderRadius={"full"}   bg={"gray.light"}  ></Box>
                    {/* chakra ui link not react-router dom link */}
                    <Link color={"gray.dark"}>instagram.com</Link>
                </Flex>
{/* for insta icon */}
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor={"pointer"} ></BsInstagram>
                      
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                        <CgMoreO size={24} cursor={"pointer"}/>
                        </MenuButton>
                        <Portal>
                            <MenuList  bg={"gray.dark"} >
                            <MenuItem  bg={"gray.dark"} onClick={copyURL}> Copy Link</MenuItem>
                            </MenuList>
                        </Portal>
                        </Menu>
                        
                    </Box>

                </Flex>
            </Flex>

		</VStack>
	);
};

export default UserHeader;
