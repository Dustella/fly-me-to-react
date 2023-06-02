import { useState } from "react";
import TaskCard from "./TaskCard";

const initData = [
  {
    name: "Task 1",
    done: false,
  },
  {
    name: "Task 2",
    done: false,
  },
  {
    name: "Task 3",
    done: true,
  },
];

const TaskList = () => {
  const [getLs, setLs] = useState(initData);
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
  };
  return (
    <>

      <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="input task name" />
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
