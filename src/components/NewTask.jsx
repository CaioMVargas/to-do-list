import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";
import { Task } from "./Tasks";
import { useState } from "react";
import { TaskCounter } from "./TaskCounter";

export function NewTask({ content }) {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState('');

  const [completedTasks, setCompletedTasks] = useState(0);

  function handleCreateNewTask(event) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => task !== taskToDelete);
    setTasks(tasksWithoutDeletedOne);

    if (completedTasks > 0) {
      setCompletedTasks(completedTasks - 1);
    }
  }

  function handleTaskToggle(taskContent, isChecked) {
    if (isChecked) {
      setCompletedTasks(completedTasks + 1);
    } else {
      setCompletedTasks(completedTasks - 1);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <textarea
            name="tasks"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
          />
          <footer className={styles.footer}>
            <button type="submit" >Criar <PlusCircle size={16} /></button>
          </footer>
        </form>
      </div>
      <div>
        <TaskCounter tasksCreated={tasks.length} tasksCompleted={completedTasks} />
        {tasks.map(task => {
          return (
            <Task
              key={task}
              content={task}
              onDeleteTask={deleteTask}
              onTaskToggle={handleTaskToggle}
            />
          );
        })}
      </div>
    </>
  );
}
