import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashbord from '@/pages/Dashbord'
import LoginPage from '@/pages/Login'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/queryClient'

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Dashbord />} />
            </Routes>
        </QueryClientProvider>
    )
}

export default App