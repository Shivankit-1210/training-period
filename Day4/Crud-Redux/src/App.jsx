import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex item-center justify-center p-2 flex-col">
      <h2 className='font-bold text-center text-slate-800 text-xl underline'>CRUD APP USING REDUX TOOLKIT </h2>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/create" element={<Create/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
