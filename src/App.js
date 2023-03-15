import Birthday from "./Pages/Birthday";
import Home from "./Pages/Home";
import OurProducts from "./Pages/OurProducts";
import Travel from "./Pages/Travel";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outproducts" element={<OurProducts />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </>
  );
}

export default App;
