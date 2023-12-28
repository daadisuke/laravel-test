import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashbord from '@/pages/Dashbord'
import LoginPage from '@/pages/Login'

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<div>ログイン</div>} />
            <Route path="/" element={<div>ダッシュボード</div>} />
        </Routes>
    )
}

export default App