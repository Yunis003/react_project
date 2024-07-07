
import {Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Projects from './pages/Projects.jsx'
import Service from './pages/Service.jsx'
import NavBar from './pages/NavBar.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  

  

  return (
    <>
    <div className="content">
    <NavBar/>

    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>

    <Footer/>

    </div>
    </>
  )
}

export default App
