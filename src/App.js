import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import News from './components/News'
import GokuForms from './components/GokuForms'
import ComingSoon from './components/ComingSoon'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='/gokuforms' element={<GokuForms />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
