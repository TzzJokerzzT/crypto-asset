import Price from "@pages/Price";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorite from "@pages/Favorite";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Price />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
