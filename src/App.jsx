import { Button, Container  , Box} from "@chakra-ui/react"
import { Navigate, Route ,Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
import RepliesPage from "./pages/RepliesPage"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import UpdateProfilePage from "./pages/UpdateProfilePage"
import userAtom from "./atoms/userAtom"
import { useRecoilValue } from "recoil"
import LogOutButton from "./components/LogOutButton"
import CreatePost from "./components/CreatePost"
import { useNavigate } from 'react-router-dom'; 
import ChatPage from "./pages/ChatPage"


function App() {
  
  const user= useRecoilValue(userAtom);
  const navigate = useNavigate();
  console.log("user detail in App.jsx " , user)

  return (
    <>
  {/* box we are adding during chat application because chat require moe screen size */}
    <Box position={"relative"} w={"full"}>
        {/* using container to wrap everything inside it. and to display all childs in center */}
    <Container maxW='620px'>
      <Header/>
     
      <Routes>
        <Route path ="/" element={ user ?<HomePage/>: <Navigate to ="/auth"/>}></Route> 
        <Route path ="/auth" element={ !user ? <AuthPage/>: <Navigate to="/"/>}></Route>
        <Route path ="/update" element={ user ?<UpdateProfilePage/>: <Navigate to ="/auth"/>}></Route> 
        <Route path="/:username" element={user?(
          // IF USER is logged in then only show create post button
          <>
          <UserPage/>
          <CreatePost/>
          </>
        ):(
          <UserPage/>
        )
         }  ></Route>
        <Route path="/replies" element={<RepliesPage/> }  ></Route>
        <Route path="/:username/post/:pid" element={<PostPage/>}></Route>
        <Route path="/chat" element={user?<ChatPage/>: <Navigate to={"/auth"}/>}></Route>
        
      </Routes>
      {/* {user && <LogOutButton/>} */}
      
     </Container>
     </Box>
    </>
  )
}

export default App
