import { useState } from "react";
import styles from "./App.module.css";
import Corner from "./components/Corner/Corner";
import Day from "./components/Day/Day";
// import Form from "./Form/Form";
import Story from "./components/Story/Story";
import Subtitle from "./components/Subtitle/Subtitle";

function App() {
  // function getGreeting(user) {
  //   if (user) {
  //     return `Hello, {user}`;
  //   }
  //   return `Welcome, dreamer!`;
  // }

  const user = {
    name: "",
  };
  const [name, setName] = useState(``);

  const handleClick = () => {
    setName();
  };

  const Greetings = (props) => {
    if (user) {
      return (
        <h1 className={styles.title}>З поверненням, сновидцю {props.name}!</h1>
      );
    } else {
      return <h1 className={styles.title}>Вітаю, сновидцю!</h1>;
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Corner />
        {/* <h1 className={styles.title}>Welcome, dreamer!</h1> */}
        <Greetings name={name} />
        <Subtitle />
        <Day />
        <Story />
      </header>
      {/* <section>
        <Form />
      </section> */}
    </div>
  );
}

export default App;
