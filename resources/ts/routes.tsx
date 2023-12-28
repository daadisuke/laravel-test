import { createBrowserRouter } from 'react-router-dom'
import DashboardPage from '@/pages/Dashboard'
import LoginPage from '@/pages/Login'
 
export const router = createBrowserRouter([
    {
        path: 'login',
        element: <LoginPage />
    }, {
        path: '/',
        element: <DashboardPage />
    }
])