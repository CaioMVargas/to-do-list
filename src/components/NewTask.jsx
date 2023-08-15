import {PlusCircle} from "phosphor-react";
import styles from "./NewTask.module.css";
import { Task } from "./Tasks";
import { useState } from "react";
import { TaskCounter } from "./TaskCounter";


export function NewTask({content}) {

  const [tasks, setTasks] = useState([
    'Mensagem teste'
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask(){
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    setNewTaskText(event.target.value)
  }

  function deleteTask(taskToDelete){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
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
            <button type="submit" >Criar <PlusCircle size={16}/></button>
        </footer>
      </form>
    </div>
    <div>
      <TaskCounter/>
      {tasks.map(task => {
        return <Task content={task}/>
      })}
    </div>
    </>
  );
}
