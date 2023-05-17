import React from 'react';
import {createRoot} from 'react-dom/client'
import { Home } from './pages/Index';
function render() {
    const root = createRoot(document.getElementById("app"));
    root.render(<Home/>)
}

render();