import { Flex , Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import useShowToast from '../hooks/useShowToast';

const HomePage = () => {
  
  
  const[posts , setPosts]=useState([]);
  const[loading , setLoading]=useState(false);
  const showToast= useShowToast();
  useEffect(() => {
     const getFeedPosts=async()=>{
         setLoading(true);
     try {
      const res= await fetch("/api/posts/feed");
      const data= await res.json();
      console.log(data);
      
     } catch (error) {
      showToast("error" , data.error,"error");
      
     }
     finally{
      setLoading(false);
     }
     }
  }, [showToast])
  
  return (
     <Link to ={"/:markzuckerberg"}>
     <Flex w={"full"} justifyContent={"center"}>
       <Button mx={"auto"}>Visit profile page</Button>
     </Flex>
     </Link>
  )
}

export default HomePage