import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingScreen from "../pages/LandingScreen/LandingScreen"
import DraggingPage from "../pages/HomeScreen/DraggingPage"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingScreen />
            },
            {
                path: "/next",
                element: <DraggingPage />
            }
        ]
    }
])