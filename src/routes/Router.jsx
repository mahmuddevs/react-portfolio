import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Error from "../pages/Error/Error";
import Details from "../pages/project-details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects/:id',
                element: <Details />
            }
        ]
    }
])

export default router