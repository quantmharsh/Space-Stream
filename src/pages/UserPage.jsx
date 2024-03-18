import React, { useState, useEffect } from 'react';
import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';
import { Flex, Spinner } from '@chakra-ui/react';

const UserPage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();
  const { username } = useParams();

  useEffect(() => {
    console.log("username " ,username)
    const getUser = async () => {
      try {
        const response = await fetch(`/api/users/profile/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [username, showToast]);

  if (loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  return (
    <div>
      <UserHeader user={user}/>
      <UserPost likes={269} replies={120} postImg="/post1.png" postTitle="Lets learn about react js "/>
      <UserPost likes={121} replies={43} postImg="/post2.png" postTitle="Discuss about learning node js and express js"/>
      <UserPost likes={790} replies={6140} postImg="/post3.png" postTitle="Important questions for leetcode"/>
    </div>
  );
};

export default UserPage;
