import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Academia from "./pages/academia";
import SubTopBar from "./components/subTopbar";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";




function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Cormorant SC:300,400,500,700'],
      },
    });
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <SubTopBar />
        <div className="content vw-100">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pages/academia" element={<Academia />}/>
            <Route path="/pages/Recursos" element={<Recursos />}/>
            <Route path="/pages/Contacto" element={<Contacto />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
