import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import "./App.css";
import Input from "./Components/Input";
import { Model_of_Task } from "./Model_of_Tasks";
import TaskCards from "./Components/TaskCards";

const App: React.FC = () => {

  const [taskAdding, setTaskAdding] = useState<string>("");
  const [tasks, setTasks] = useState<Model_of_Task[]>([]);


 useEffect(()=>{
  document.title = "taskify"
 },[])
  const handleTaskAdding = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (taskAdding) {
      setTasks([...tasks, { id: Date.now(), task: taskAdding, isDone: false }]);
      setTaskAdding("");
    }
  };


  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <div className="bg-violet-400 w-full h-[70px] flex justify-center">
        <div className="text-5xl font-permanent">Taskify</div>
      </div>

      <Container className="h-[50px] flex flex-col items-center z-1">
        <Input
          taskAdding={taskAdding}
          setTaskAdding={setTaskAdding}
          handleTaskAdding={handleTaskAdding}
        />
      </Container>

      {tasks.length > 0 ? (
        <Container className="flex flex-wrap gap-3 w-full justify-center">
          <TaskCards tasks={tasks} setTasks={setTasks} />
        </Container>
      ) : (
        <div className="text-xl">Add your Tasks..</div>
      )}
    </div>
  );
};

export default App;
