import styles from "./App.module.css";
import Corner from "./Corner/Corner";

function App() {
  function getGreeting(user) {
    if (user) {
      return `Hello, {user}`;
    }
    return `Welcome, dreamer!`;
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Corner />
        <h1 className={styles.title}>{getGreeting()}</h1>
      </header>
    </div>
  );
}

export default App;
