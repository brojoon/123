import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
