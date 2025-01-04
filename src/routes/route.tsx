import { App } from "@/App";
import LogIn from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path:"/login",
        element: <LogIn />
    },
    {
        path:"/",
        element: <App/>
    },
])

export default routes;