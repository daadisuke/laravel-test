import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app'
import { BrowserRouter } from "react-router-dom";

const root = createRoot(
    document.getElementById('app') as HTMLElement
)

root.render(
    <React.StrictMode>
        <h1>Hello React !</h1>
    </React.StrictMode>
)