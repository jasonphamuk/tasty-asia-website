import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import About from "./pages/About";
import Cookbook from "./pages/Cookbook";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
          <Route path="/cookbook" element={<Cookbook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;