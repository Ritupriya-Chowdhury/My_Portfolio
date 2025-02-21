import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Page404 from "../pages/Page404";
import AllProjects from "../pages/AllProjects";
import ProjectDetails from "../pages/ProjectDetails";


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
          path: 'all-projects',
          element: <AllProjects/>
        },
        
        {
          path: 'all-projects/:id',
          element: <ProjectDetails/>
        },
        
       
        
      ]
    }, 
    {
      path: 'resume',
      element: <Resume />
    },
   
    {
      path:'/*',
      element:<Page404/>
    },

])


export default router;