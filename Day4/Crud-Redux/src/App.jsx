import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Read from "./Read";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-full h-full flex item-center justify-center p-2 flex-col">
        <h2 className="font-bold text-center text-white md:text-xl text-sm underline">
          CRUD APP USING REDUX TOOLKIT{" "}
        </h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
