import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <footer className={styles.footer}>
            <button type="submit" >Criar</button>
        </footer>
      </form>
    </div>
  );
}
