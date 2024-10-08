import {createBrowserRouter, Outlet} from "react-router-dom";
import {paths}  from  './paths'
import SignInSide from "../layouts/sign-in-side/SignInSide";
import ErrorPage from "../views/error-page";
import Dashboard from "../layouts/dashboard/Dashboard";
import MainGrid from "../layouts/dashboard/components/MainGrid";
import Details from "../layouts/dashboard/components/details-page";



const router = createBrowserRouter([
    {
        path: '/',
        // action:()=>,
        errorElement:<ErrorPage/>,

        children:[
            {
                path: paths.auth.root,
                element: <SignInSide/>,
            },
            {
                path:paths.dashboard.home,
                element: <Dashboard />,
                children:[
                    {
                        path: paths.dashboard.home,
                        element:<MainGrid/>
                    },
                    {
                        path: paths.dashboard.services_stats,
                        element:<Details/>
                    }
                ]
            }
        ]


    },
])


export default  router