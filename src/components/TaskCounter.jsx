
import styles from "./TasksCounter.module.css";

export function TaskCounter() {

  return (
    <>
      <header className={styles.container}>
        <div className={styles.countNumber}>
          <strong className={styles.tasksCreated}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.countNumber}>
          <strong className={styles.completedTasks}>Concluidas</strong>
          <span>0</span>
        </div>
      </header>
    </>
  );
}
