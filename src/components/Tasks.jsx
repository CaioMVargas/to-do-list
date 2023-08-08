import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

export function Task() {
    return(
        <form className={styles.list}>
        <div className={styles.checkbox}>
          <div className={styles.task}>
            <input type="checkbox" name="checkbox1" id="checkbox1" />
            <label htmlFor="checkbox1">
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </label>
            <footer>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </footer>
          </div>
        </div>
      </form>
    )
}