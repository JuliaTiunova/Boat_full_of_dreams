import styles from "./App.module.css";
import Corner from "./Corner/Corner";
import Day from "./Day/Day";

function App() {
  // function getGreeting(user) {
  //   if (user) {
  //     return `Hello, {user}`;
  //   }
  //   return `Welcome, dreamer!`;
  // }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Corner />
        {/* <h1 className={styles.title}>Welcome, dreamer!</h1> */}
        <h1 className={styles.title}>Вітаю, сновидцю!</h1>
        <button className={styles.subtitle}>Зайти у вирій</button>
        <Day />
      </header>
    </div>
  );
}

export default App;
