import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task({content}) {
    return(
        <form className={styles.list}>
        <div className={styles.checkbox}>
          <div className={styles.task}>
            <input type="checkbox" name="checkbox1" id="checkbox1" />
            <label htmlFor="checkbox1"/>
              <p>{content}</p>
            <footer>
              <button title="Deletar comentário" className={styles.trash}>
                <Trash size={24} />
              </button>
            </footer>
          </div>
        </div>
      </form>
    )
}