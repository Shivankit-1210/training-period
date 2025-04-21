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
      {/* Contains the parent view of our app */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main content should grow to fill available space */}
        <div className="flex-1 w-full flex items-center justify-center p-2 flex-col">
          <h2 className="font-bold text-center text-white md:text-xl text-sm underline">
            CRUD APP USING REDUX TOOLKIT
          </h2>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Update />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/read/:id" element={<Read />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;