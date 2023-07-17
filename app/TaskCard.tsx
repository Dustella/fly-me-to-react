import { useState } from "react";

interface TaskCardProps {
  taskName: string;
  isDone: boolean;
  mutate: ()=>void;
  doDelete: ()=>void;
}

const TaskCard = ({ taskName, isDone, mutate, doDelete }: TaskCardProps) => {
const [tempState,setState] = useState(false)

const handleClick = ()=>{
    if(tempState){
        doDelete()
    }else{
        setState(true)
        setTimeout(()=>{
            setState(false)
        },200)
        mutate()
    }
}

  return (
    <div className="m-5 w-50 b-2 shadow-xl rounded-xl p-2 flex flex-col items-center justify-center select-none" onClick={handleClick}>
      <h3>{taskName}</h3>
      <p>{isDone ? "Done" : "Not Done"}</p>
    </div>
  );
};

export default TaskCard;
