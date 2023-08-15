import styles from '../components/TaskCounter.module.css'

export function TaskCounter({taskCount}) {

  return (
    <>
      <header className={styles.container}>
        <div className={styles.countNumber}>
          <strong className={styles.tasksCreated}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.countNumber}>
          <strong className={styles.completedTasks}>Concluidas</strong>
          <span>{taskCount}</span>
        </div>
      </header>
    </>
  );
}
