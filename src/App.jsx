import { render } from "@testing-library/react";
import "animate.css";
import styles from "./App.module.css";
import About from "./components/About/About";
// import Corner from "./components/Corner/Corner";
import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";
import Story from "./components/Story/Story";
import Subtitle from "./components/Subtitle/Subtitle";
import Instruction from "./components/Instruction/Instruction";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          {/* <Corner /> */}
          <Menu className={styles.menu} />
          <Greetings />
          <Link to="/form">
            <Subtitle className="animate__animated animate__pulse animate__slower	 animate__infinite " />
          </Link>{" "}
          <Switch>
            <Route path="/form">
              <Form onAdd={handleAdd} />
            </Route>
          </Switch>
        </header>
        <section>
          <About />
        </section>
        <section>
          <Instruction />
        </section>
        <section></section>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
