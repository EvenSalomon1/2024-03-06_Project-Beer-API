import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AllBeers from "./pages/AllBeers/AllBeers";
import Detailpage from "./pages/Detailpage/Detailpage";
import Random from "./pages/Random/Random";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allbeers" element={<AllBeers />} />
          <Route path="/allbeers/:id" element={<Detailpage />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
