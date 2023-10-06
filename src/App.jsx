import "./App.css";
import Home from "./pages/Home";
import FullPost from "./pages/FullPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="flex gap-y-5 flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/posts/:id`} element={<FullPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
