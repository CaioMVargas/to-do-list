import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import styles from "./components/App.module.css";


import "./global.css";

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header/>
        <NewTask/>
      </div>
    </>
  );
}

export default App;
