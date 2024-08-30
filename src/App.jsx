import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"



import Navbar from "./components/Navbar"
import Placeholder from "./pages/Placeholder"
import Background from "./components/Background"
import NoPage from "./pages/NoPage"





BrowserRouter

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/a" element={<Placeholder />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
