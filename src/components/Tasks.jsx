import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export function Tasks() {
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
      <footer className={styles.list}>
        <div className={styles.checkbox}>
          <div>
            <input type="checkbox" name="checkbox1" id="checkbox1" />
            <label htmlFor="checkbox1">
              Mensagem Mensagem Mensagem Mensagem
            </label>
            <button title="Deletar comentário">
            <Trash size={24}/>
            </button>
          </div>
          <div>
            <input type="checkbox" name="checkbox2" id="checkbox2" />
            <label htmlFor="checkbox2">
              Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem Mensagem
              Mensagem Mensagem
            </label>
          </div>
          <div>
            <input type="checkbox" name="checkbox3" id="checkbox3" />
            <label htmlFor="checkbox3">Mensagem</label>
          </div>
        </div>
      </footer>
    </>
  );
}
