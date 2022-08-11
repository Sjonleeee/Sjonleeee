import { Button, Container} from "react-bootstrap";
import { Routes, Route} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Store from "./pages/Store";

function App() {

  return ( 
<> 
   <Navbar />
  <Container  id="yyyy" className="mb-4">
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  </Container>
</>
 )  
}

export default App
