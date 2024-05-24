import  CssBaseline  from "@mui/material/CssBaseline"
import TodoList from "./TodoList"
import Home from "./Home";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import { counterContext } from "./context";

function App(){
  const router = createBrowserRouter([{
    path: "/",
    element:  <><Navbar /><Home /></>
  },

 { path: "/login",
   element:<> <Navbar /> <Login/></>
 },

 {
  path: "/user/:username",
  element: <><Navbar /><User/></>
 }
])
 /*RouterProvider is used to fit the different components inside the specific page you want them to be in */
  return (
    <div>
    
    <RouterProvider router={router} />
    </div>
  )
}

export default App