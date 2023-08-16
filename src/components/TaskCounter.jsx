import styles from './TaskCounter.module.css'

export function TaskCounter({ tasksCreated, tasksCompleted }) {
  return (
    <header className={styles.container}>
      <div className={styles.countNumber}>
        <strong className={styles.tasksCreated}>Tarefas criadas</strong>
        <span>{tasksCreated}</span>
      </div>
      <div className={styles.countNumber}>
        <strong className={styles.completedTasks}>Concluídas</strong>
        <span>{tasksCompleted} de {tasksCreated}</span>
      </div>
    </header>
  );
}
