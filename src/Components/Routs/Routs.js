import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Errorpage from "../Errorpage/Errorpage";
import Faq from "../FAQ/Faq";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Catagory from '../../Components/Catagory/Catagory'
import CourseDeatels from "../CourseDeatels/CourseDeatels";
import PrimeamCourses from "../Primeamcourse/PrimeamCourses";
import Login from "../Login/Login";
import Register from "../Register/Register";



const routs = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          errorElement: <Errorpage></Errorpage>,
          children:[
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/catagory',
                    element: <Catagory></Catagory>,
                    loader: () => fetch('https://it-guru-sarver-ashr-aful007.vercel.app/courses')
                           
               },
               {
                    path: '/coursedeatels/:id',
                    element: <CourseDeatels></CourseDeatels>,
                    loader: ({params}) => fetch(`https://it-guru-sarver-ashr-aful007.vercel.app/courses/${params.id}`)

               },
               {
                    path: '/primeamcourses',
                    element:<PrimeamCourses></PrimeamCourses>
               },
               {
                    path: '/blog',
                    element: <Blog></Blog>
               },
               {
                    path: '/FAQ',
                    element: <Faq></Faq>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: 'register',
                    element: <Register></Register>
               }
          ]
     }
])

export default routs