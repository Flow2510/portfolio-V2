import './App.scss'
import { useEffect, useState } from 'react'
import projects from "./data/projects.json"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ProjectPage from './pages/projectpage'
import Loader from './components/loader/loader'
import { AnimatePresence } from 'motion/react'
import About from './pages/about'
import Archives from './pages/archives'

function App() {
  const [loading, setLoading] = useState(true)
  const [projectsList, setProjectsList] = useState([])
  const [isDesktop, ] = useState(globalThis.innerWidth > 1024)
  const [isTablet, ] = useState(globalThis.innerWidth > 768)

  useEffect(() => {
    setProjectsList(projects)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && (
          <Loader
            key="loader"
          />
        )}
      </AnimatePresence>
      {!loading && (
        <Routes>
          <Route path='/' element={<Home projects={projectsList} isDesktop={isDesktop} isTablet={isTablet} />}/>
          <Route path='/:id' element={<ProjectPage projects={projectsList} isDesktop={isDesktop}/>}/>
          <Route path='/about' element={<About isDesktop={isDesktop} />}/>
          <Route path='/archives' element={<Archives/>}/>
          <Route />
        </Routes>
      )}
    </>
  );
}

export default App
