import { render } from "@testing-library/react";
import styles from "./App.module.css";
import Corner from "./components/Corner/Corner";
import Form from "./components/Form/Form";

import Story from "./components/Story/Story";
import Subtitle from "./components/Subtitle/Subtitle";

function App() {
  // function getGreeting(user) {
  //   if (user) {
  //     return `Hello, {user}`;
  //   }
  //   return `Welcome, dreamer!`;
  // }

  const Greetings = () => {
    return <h1 className={styles.title}>Вітаю, сновидцю!</h1>;
  };

  let prota = "";
  let protaName = "";
  let protaPlace = "";
  const handleAdd = (protagonist, place, name) => {
    prota = protagonist;
    protaName = name;
    protaPlace = place;
    render(<Story protagonist={prota} place={protaPlace} name={protaName} />);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Corner />
        {/* <h1 className={styles.title}>Welcome, dreamer!</h1> */}
        <Greetings />
        <Subtitle />
      </header>
      <section>
        <Form onAdd={handleAdd} />
        {/* <Story protagonist={prota} /> */}
      </section>
    </div>
  );
}

export default App;
