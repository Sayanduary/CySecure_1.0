import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard"
import Logs from "./components/pages/Logs"
import Alert from "./components/pages/Alert"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound";
function App() {
  


  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logs" element={<Logs/>} />
        <Route path="/alert" element={<Alert/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/notfound" element={<NotFound/>} />
      </Routes>
     </Router>
    </>
  )
}

export default App
