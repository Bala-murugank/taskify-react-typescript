import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";
import { Model_of_Task } from "../Model_of_Tasks";

type prop = {
  task: Model_of_Task;
  tasks: Model_of_Task[];
  setTasks: React.Dispatch<React.SetStateAction<Model_of_Task[]>>;
};

const SingleTask = ({ task, tasks, setTasks }: prop) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<string>(task.task);

  const input_field = useRef<HTMLInputElement>(null);

  const handleIsDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };
  useEffect(() => {
    input_field.current?.focus();
  }, [isEdit]);

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, task: editingTask } : task
      )
    );

    setIsEdit(!isEdit);
  };
  return (
    <>
      <Form className="flex-1" onSubmit={(e) => handleEdit(e, task.id)}>
        {isEdit ? (
          <Form.Control
            ref={input_field}
            value={editingTask}
            onChange={(e) => setEditingTask(e.target.value)}
          />
        ) : (
          <span className={task.isDone ? "line-through" : ""}>{task.task}</span>
        )}
      </Form>
      <div className="flex gap-1">
        <span
          className="cursor-pointer"
          onClick={() => {
            if (!task.isDone && !task.isDone) {
              setIsEdit(!isEdit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className="cursor-pointer " onClick={() => handleDelete(task.id)}>
          <MdDelete />
        </span>
        <span className="cursor-pointer " onClick={() => handleIsDone(task.id)}>
          <MdDone />
        </span>
      </div>
    </>
  );
};

export default SingleTask;
