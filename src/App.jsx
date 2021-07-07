import { render } from "@testing-library/react";
import styles from "./App.module.css";
// import Corner from "./components/Corner/Corner";
// import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";

import Story from "./components/Story/Story";
import Subtitle from "./components/Subtitle/Subtitle";

function App(props) {
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
  let protaHelper = "";
  let protaPower = "";
  const handleAdd = (protagonist, place, name, helper, power) => {
    prota = protagonist;
    protaName = name;
    protaPlace = place;
    protaHelper = helper;
    protaPower = power;
    render(
      <Story
        protagonist={prota}
        place={protaPlace}
        name={protaName}
        helper={protaHelper}
        power={protaPower}
      />
    );
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {/* <Corner /> */}
        <Menu className={styles.menu} />
        <Greetings />
        <Subtitle />
      </header>
      <section>
        {/* <Form onAdd={handleAdd} /> */}
        {/* <Story protagonist={prota} /> */}
      </section>
    </div>
  );
}

export default App;
