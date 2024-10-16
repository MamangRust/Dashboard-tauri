import DashboardLayout from "@/layouts/admin/Dashboard";
import AuthLayout from "@/layouts/auth/Auth";
import SignInPage from "@/pages/auth/Login";
import DashboardPage from "@/pages/admin/Dashboard";
import ErrorPage from "@/pages/error";
import PointOfSalePage from "@/pages/admin/PointOfSale";
import ProfilePage from "@/pages/admin/Profile";
import TablePayment from "@/pages/admin/Table";
import { createBrowserRouter } from "react-router-dom";
import TermsOfServicePage from "@/pages/TermOfService";
import CompanyProfilePage from "@/pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <DashboardPage />
            }
        ]
    },
    {
        path: "/point-of-sale",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <PointOfSalePage />
            }
        ]
    },
    {
        path: "/table",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <TablePayment />
            }
        ]
    },
    {
        path: "/profile",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <ProfilePage />
            }
        ]
    },
    {
        path: "/term",
        element: <TermsOfServicePage/>
    },
    {
        path: "/home",
        element: <CompanyProfilePage />
    },
    {
        path: "/login",
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children:[
            {
                index: true,
                element: <SignInPage />
            }
        ]
    }
]);

export default router;