import HomePage from "./pages/HomePage"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { Routes,Route,  } from "react-router-dom"
const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default MainRouter;