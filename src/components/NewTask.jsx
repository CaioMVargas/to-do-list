import {PlusCircle} from "phosphor-react";
import styles from "./NewTask.module.css";
import { Task } from "./Tasks";
import { TaskCounter } from "./TaskCounter";


export function NewTask() {


  return (
    <>
    <div className={styles.container}>
      <form className={styles.form}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <footer className={styles.footer}>
            <button type="submit" >Criar <PlusCircle size={16}/></button>
        </footer>
      </form>
    </div>
    <div>
      <TaskCounter/>
      <Task/>
    </div>
    </>
  );
}
