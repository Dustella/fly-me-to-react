import "./App.css";
import Home from "./components/Home";
import Notes from "./components/Notes";
import TaskList from "./components/TaskList";
import { useAtom } from "jotai";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import noteSote from "./store/note";
import { useMemo } from "react";
import tasks from "./store/tasks";

function App() {

  const [text] = useAtom(noteSote)
  const len = useMemo(() => text.length, [text])

  const [taskLs]= useAtom(tasks)
  
const taskLen = useMemo(()=>taskLs.length,[taskLs])
  return (
    <>
      <Router>
        <div>
          <h1>Task List</h1>
          <p>Note Length: {len} </p>
          <p>Task Number: {taskLen} </p>
      </div>
        <nav>
          <Link to="/" className="m-2 text-xl">Home</Link>
          <Link to="/tasks" className="m-2 text-xl">Tasks</Link>
          <Link to="/notes" className="m-2 text-xl">Notes</Link>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          {/* route to note */}
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
