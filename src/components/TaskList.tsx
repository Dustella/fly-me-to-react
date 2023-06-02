import { useState } from "react";
import TaskCard from "./TaskCard";
import { useAtom } from "jotai";
import tasks from "../store/tasks";


const TaskList = () => {
  const [getLs, setLs] = useAtom(tasks)
    const [newName,setName] = useState("")

  const changeDone = (index: number) => () => {
    setLs(
      getLs.map((item, i) => {
        if (i === index) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      })
    );
  };

  const doDelete = (index: number) => () => {
    setLs(getLs.filter((_, i) => i !== index));
    };

  const addItem = () => {
    setLs([...getLs, { name: newName, done: false }]);
    setName("")
  };
  return (
    <>
        <div className="mt-4">
          Single click to change task status<br></br>
          Double click to delete task
        </div>
      <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={newName} placeholder="input task name" />
        <button type="button" onClick={addItem}>Add</button>
      </div>
      {getLs.map((item, index) => {
        return (
          <TaskCard
            key={item.name}
            taskName={item.name}
            isDone={item.done}
            mutate={changeDone(index)}
            doDelete={doDelete(index)}
          />
        );
      })}
      <div className="">lala</div>
    </>
  );
};

export default TaskList;
