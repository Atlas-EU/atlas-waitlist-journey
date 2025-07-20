import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from './App'
import Index from './pages/Index'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import NotFound from './pages/NotFound'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </App>
  </BrowserRouter>
);