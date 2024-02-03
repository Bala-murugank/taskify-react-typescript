import React from "react";

import { Model_of_Task } from "../Model_of_Tasks";
import SingleTask from "./SingleTask";
import "./styleTask.css";


interface prop {
  tasks: Model_of_Task[];
  setTasks: React.Dispatch<React.SetStateAction<Model_of_Task[]>>;
}

const TaskCards: React.FC<prop> = ({ tasks, setTasks }) => {
  return (
    <>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <div
            key={task.id}
            className="flex w-[300px] task_Background h-[60px]  bg-slate-200  items-center p-3 gap-2"
          >
            <SingleTask task={task} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
    </>
  );
};

export default TaskCards;
