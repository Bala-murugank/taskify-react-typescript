
import React from "react";
import { Button, Form } from "react-bootstrap";

interface props {
  taskAdding: string;
  setTaskAdding: React.Dispatch<React.SetStateAction<string>>;
  handleTaskAdding: (e: React.FormEvent<HTMLElement>) => void;
}

const Input: React.FC<props> = ({
  taskAdding,
  setTaskAdding,
  handleTaskAdding,
}) => {
  return (
    <Form.Group className="w-[70%] h-full relative flex rounded-2xl">
      <Form.Control
        placeholder="Enter your Tasks"
        value={taskAdding}
        className="rounded-full input__box"
        onChange={(e) => setTaskAdding(e.target.value)}
      />

      <Button
        variant="info"
        className="absolute right-5 bottom-[6px] rounded-lg hover:scale-75"
        onClick={(e) => handleTaskAdding(e)}
      >
        Go
      </Button>
    </Form.Group>
  );
};

export default Input;
