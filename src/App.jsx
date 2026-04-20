import { HashRouter, Routes, Route } from 'react-router-dom'
import { ParticipantPage } from './pages/ParticipantPage'
import { AdminPage } from './pages/AdminPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ParticipantPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
