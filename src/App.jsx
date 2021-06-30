import styles from "./App.module.css";

function App() {
  function getGreeting(user) {
    if (user) {
      return `Hello, {user}`;
    }
    return `Welcome, dreamer!`;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{getGreeting()}</h1>
    </div>
  );
}

export default App;
