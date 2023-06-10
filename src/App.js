import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Contacts from "./pages/contacts";
import LayoutNavbar from "./components/LayoutNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <LayoutNavbar/>
        <main>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        </main>
        <div className="footer-space">

        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
