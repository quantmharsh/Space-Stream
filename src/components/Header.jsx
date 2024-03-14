import { Flex, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    // it is hoook provided by chakra ui for changing color 
     const{colorMode , toggleColorMode } =useColorMode();
  return (
    <div>
        <Flex justifyContent={"center"} mt={6} mb='12'>
            <Image
             cursor={"pointer"}
             alt="logo"
             width={6}
             src={colorMode==="dark"?"/light-logo.svg":"/dark-logo.svg"}
             onClick={toggleColorMode}

            />

        </Flex>
    </div>
  )
}
 
export default Header