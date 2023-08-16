import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task({ content, onDeleteTask, onTaskToggle}) {
  const [checked, setChecked] = useState(false);

  const handleTaskToggle = () => {
    setChecked(!checked);
    onTaskToggle(content, !checked);
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <form className={styles.list}>
      <div className={styles.checkbox}>
        <div className={styles.task}>
          <input
            onClick={handleTaskToggle}
            type="checkbox"
            checked={checked}
            name="checkbox1"
            id="checkbox1"
          />
          <label htmlFor="checkbox1" />
          <p className={`${styles.taskText} ${checked ? styles.completedText : ''}`}>{content}</p>
          <footer>
            <button
              onClick={handleDeleteTask}
              title="Deletar comentário"
              className={styles.trash}
            >
              <Trash size={24} />
            </button>
          </footer>
        </div>
      </div>
    </form>
  );
}
