import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Error from './pages/Error'

import Plants from './pages/Plants'
import Travel from './pages/Travel'
import Fashion from './pages/Fashion'
import Books from './pages/Books'
import Hobbies from './pages/Hobbies'
import RasProjects from './pages/RasProjects'
import Navbar from './components/Navbar'
import Sample from './pages/Sample'
import Tictactoe from './pages/Tictactoe'
import Batch4 from './pages/Batch4'
// import Rag from './pages/Rag'


export default function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/batch4';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/plants" element={<Plants />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Hobbies" element={<Hobbies />} />
        <Route path="/rasprojects" element={<RasProjects />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/batch4" element={<Batch4 />} />
        {/* <Route path="/rag" element={<Rag />} /> */}
        <Route path="*" element={<Error />}/>
        
      </Routes>
    </>
  )
}
