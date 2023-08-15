import { useState } from "react";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task({ content, onDeleteTask }) {
  const [taskCount, setTaskCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleTaskCount = () => {

    if (!checked) {
      setTaskCount(taskCount + 1);
    } else {
      setTaskCount(taskCount - 1);
    }
    setChecked(!checked)
  }

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <>
      <form className={styles.list}>
        <div className={styles.checkbox}>
          <div className={styles.task}>
            <input
              onClick={handleTaskCount}
              type="checkbox"
              checked={checked}
              name="checkbox1"
              id="checkbox1"
            />
            <label htmlFor="checkbox1" />
            <p>{content}</p>
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
    </>
  );
}
