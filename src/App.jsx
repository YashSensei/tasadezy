import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DemosPage from './pages/DemosPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/demos" element={<DemosPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
