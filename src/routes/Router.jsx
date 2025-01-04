import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h4>Error</h4>,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router