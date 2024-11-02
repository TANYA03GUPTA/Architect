import Footer from "./Components/Footer";
import TopInfo from "./Components/TopInfo";
import Body from "./Components/Body";
import "./App.css";
import Navbar2 from "./Components/Navbar2";
import Contact from "./Components/Contact";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar2 />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopInfo />
                <Body />
              </>
            }
          />
            {/*
          <Route path="/contact" element={<Contact />} />
        
      <TopInfo />
      <Body />
          <Contact />*/}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
