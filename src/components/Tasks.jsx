import styles from './Tasks.module.css';

export function Tasks() {
    return(
        <div>
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
            <footer>
                <div>
                    <label>
                        <input type="checkbox" name="checkbox1" id="checkbox1" />
                        Mensagem
                    </label>
                </div>
            </footer>
        </div>
    )
}