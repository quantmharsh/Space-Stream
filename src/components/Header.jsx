import { Flex, Image, Link, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import { Link as RouterLink} from 'react-router-dom';
import {AiFillHome} from "react-icons/ai"
import {RxAvatar} from "react-icons/rx"
const Header = () => {
    // it is hoook provided by chakra ui for changing color 
     const{colorMode , toggleColorMode } =useColorMode();
     
     const user= useRecoilValue(userAtom);
     console.log("user in Heade.jsx " , user);
  return (
    <div>
        <Flex justifyContent={"space-between"} mt={6} mb='12'>
          {user &&(
            <Link as ={RouterLink} to ="/"> 
              <AiFillHome size={24}/>
            </Link>
          )}
            <Image
             cursor={"pointer"}
             alt="logo"
             width={6}
             src={colorMode==="dark"?"/light-logo.svg":"/dark-logo.svg"}
             onClick={toggleColorMode}

            />
            {user &&(

            //  changed here user.user.username
            <Link as ={RouterLink} to = {`/${user.username}`}>
              <RxAvatar size={24}/>
            </Link>
          )}

        </Flex>
    </div>
  )
}
 
export default Header