import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
