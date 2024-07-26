import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} /> */}
        </Routes>
      </Router>
    </main>
  )
}

export default App
