import { Button, Container } from "@chakra-ui/react"
import { Route ,Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"


function App() {
  

  return (
    <>
    {/* using container to wrap everything inside it. and to display all childs in center */}
    <Container maxW='620px'>
      <Header/>
      <Routes>
        <Route path="/:userName" element={<UserPage/> }  ></Route>
        <Route path="/:userName/post/:pid" element={<PostPage/>}></Route>
      </Routes>
     </Container>
    </>
  )
}

export default App
