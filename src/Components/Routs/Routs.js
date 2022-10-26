import { createBrowserRouter } from "react-router-dom";
import Courses from "../Courses/Courses";
import Errorpage from "../Errorpage/Errorpage";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Main from "../Layout/Main";


const routs = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <Errorpage></Errorpage>,
          children:[
               {
                    path: '/home',
                    element: <Home></Home>
               },
               {
                    path: '/courses',
                    element: <Courses></Courses>
               },
               {
                    
               }
          ]
     }
])

export default routs