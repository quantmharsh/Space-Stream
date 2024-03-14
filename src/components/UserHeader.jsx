import React from 'react';
import { useToast, VStack, Flex, Box, Avatar, Text, Link, Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
    const toast = useToast();
    const location = useLocation();

    const copyURL = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            toast({
                title: 'Link Copied',
                description: "Profile Link Copied",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        })
    }

    // Simplify the match logic to determine if it's the posts or replies page
    // Assuming posts page URL is '/username' and replies page URL is '/username/replies'
    const isPostPage = location.pathname.match(/\/[^/]+$/) !== null;
    const isRepliesPage = location.pathname.match(/\/[^/]+\/replies$/) !== null;

    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2xl"}>Mark Zuckerberg</Text>
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
                <Box>
                    <Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" size={{
                        base:"md",
                        md:"xl"
                    }} />
                </Box>
            </Flex>
            <Text>
                Co-Founder, Executive Chairman, and CEO of Meta Platforms
            </Text>

            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.dark"}>3.2k Followers</Text>
                    <Box w={1} h={1} borderRadius={"full"} bg={"gray.light"}></Box>
                    <Link color={"gray.dark"} href="https://instagram.com" isExternal>instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.dark"}>
                                    <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>

            <Flex w={"full"}>
                <Flex
                    flex={1}
                    cursor={"pointer"}
                    justifyContent={"center"}
                    pb={3}
                    borderBottom={isPostPage ? "1.5px solid white" : "1.5px solid gray"}
                    // color={isPostPage ? "white" : "gray.dark"}>
                    //     color={}
                    >
                    <Text fontWeight={"bold"}>Posts</Text>
                </Flex>

                <Flex
                    flex={1}
                    cursor={"pointer"}
                    justifyContent={"center"}
                    pb={3}
                    color={"gray.dark"}
                    borderBottom={isRepliesPage ? "1.5px solid white" : "1.5px solid gray"}
                    // color={isRepliesPage ? "white" : "gray.dark"}
                    >
                    <Text fontWeight={"bold"}>Replies</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;
