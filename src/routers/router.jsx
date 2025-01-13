import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Page404 from "../pages/Page404";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children: [

        {
          path: '',
          element: <Home />
        },
        {
            path: 'projects',
            element:<Projects/>
          },
        {
          path: 'resume',
          element: <Resume />
        },
       
        
      ]
    }, 
   
    {
      path:'/*',
      element:<Page404/>
    },

])


export default router;