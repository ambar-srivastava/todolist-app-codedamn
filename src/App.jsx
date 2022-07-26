import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [currentText, setCurrentText] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, { task: currentText, completed: false }]);
    inputTask.current.value = "";
    setCurrentText("");
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      todoList.filter((deleteVal) => {
        return deleteVal.task !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((completeVal) => {
        return completeVal.task === taskToComplete
          ? { task: taskToComplete, completed: true }
          : {
              task: completeVal.task,
              completed: completeVal.completed ? true : false,
            };
      })
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          ref={inputTask}
          onKeyDown={(event) => {
            if (event.key === "Enter") addTask();
          }}
          type="text"
          placeholder="Add new task"
          onChange={(event) => {
            setCurrentText(event.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          console.log(val, key);
          return (
            <div className="tasks">
              <li key={key}> {val.task} </li>
              <button onClick={() => completeTask(val.task)}>
                {val.completed === true ? "Completed" : "Mark it done"}
              </button>
              <button onClick={() => deleteTask(val.task)}>Delete</button>
              {/* {val.completed ? (
                <h5>Task Completed</h5>
              ) : (
                <h5>Incomplete Task</h5>
              )} */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
