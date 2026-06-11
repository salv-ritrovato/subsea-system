import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import EngineeringPage from './pages/EngineeringPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
