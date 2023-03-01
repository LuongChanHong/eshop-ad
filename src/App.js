import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./Page/Main/Main";
import Login from "./Page/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
