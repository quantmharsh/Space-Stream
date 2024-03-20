import { Flex , Button, Spinner} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import useShowToast from '../hooks/useShowToast';
import Post from '../components/Post';
import { useRecoilState } from 'recoil';
import postsAtom from '../atoms/postsAtom';

const HomePage = () => {
  
  
  const[posts , setPosts]=useRecoilState(postsAtom);
  const[loading , setLoading]=useState(true);
  const showToast= useShowToast();
  useEffect(() => {
     const getFeedPosts=async()=>{
         setLoading(true);
        //  setting this empty because when we were coming from user page to home page then flickering was happening
         //since its empty it will show loading state until we get data
         setPosts([])
     try {
      const res= await fetch("/api/posts/feed");
      const data= await res.json();
      console.log("Data from feed post ",data);
      setPosts(data);
      
     } catch (error) {
      showToast("error" , "error while getting feed ","error");
      
     }
     finally{
      setLoading(false);
     }
     }
     getFeedPosts();
  }, [showToast ,setPosts])
  
  return (
    <>
    {loading &&(
      <Flex justify={"center"}>
        <Spinner size={"xl"}/>
      </Flex>
    )}
    {!loading && posts.length===0 &&(
      <h1> Follow Some Users to read the post</h1>
    )}
    {posts.map((post)=> (
      <Post key={post._id} post={post} postedBy={post.postedBy}/>

    ))}
    </>
  )
}

export default HomePage