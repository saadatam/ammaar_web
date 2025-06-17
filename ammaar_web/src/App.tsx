import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import ExampleComponent from './pages/ExampleComponent'
import Plants from './pages/Plants'
import Travel from './pages/Travel'
import Fashion from './pages/Fashion'
import Books from './pages/Books'
import Hobbies from './pages/Hobbies'
import Photography from './pages/Photography'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ExampleComponent" element={<ExampleComponent />}/>
      <Route path="/plants" element={<Plants />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Hobbies" element={<Hobbies />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="*" element={<Error />}/>
      
    </Routes>
    </>
  )
}
