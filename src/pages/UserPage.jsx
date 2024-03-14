import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <div>
      <UserHeader/>
      <UserPost likes={269} replies={120} postImg="/post1.png"  postTitle="Lets learn about react js "/>
      <UserPost likes={121} replies={43} postImg="/post2.png"  postTitle="discuss about learning node js  and express js"/>
      <UserPost likes={790} replies={6140} postImg="/post3.png"  postTitle="Important questions for leetcode"/>
    </div>
  )
}

export default UserPage