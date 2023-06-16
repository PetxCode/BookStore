import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingPage from "../pages/landingScreen/LandingPage"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
])