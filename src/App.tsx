import "./App.css";
import Home from "./components/Home";
import TaskList from "./components/TaskList";

import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <h1>Task List</h1>
          Single click to change task status<br></br>
          Double click to delete task
        </div>
        <nav>
          <Link to="/" className="m-2">Home</Link>
          <Link to="/tasks" className="m-2">Tasks</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
