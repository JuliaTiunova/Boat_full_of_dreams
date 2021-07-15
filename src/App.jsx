import styles from "./App.module.css";
import "animate.css";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Menu from "./components/Menu/Menu";
import Story from "./components/Story/Story";
import Subtitle from "./components/Subtitle/Subtitle";
import Instruction from "./components/Instruction/Instruction";
import Contacts from "./components/Contacts/Contacts";
import Title2 from "./components/Title2/Title2";
import LinkBack from "./components/LinkBack/LinkBack";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import BurgerButton from "./components/BurgerButton/BurgerButton";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import { useState } from "react";

function App(props) {
  // function getGreeting(user) {
  //   if (user) {
  //     return `Hello, {user}`;
  //   }
  //   return `Welcome, dreamer!`;
  // }

  const history = useHistory();

  const Greetings = () => {
    return <h1 className={styles.title}>Вітаю, сновидцю!</h1>;
  };

  const [story, setStory] = useState(null);

  const handleAdd = (newStory) => {
    setStory(newStory);
    history.push("/story");
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Menu className={styles.menu} />
            <BurgerButton className={styles.burger} />
            <MenuBurger className={styles.burgerMenu} />
            <Greetings />
            <Link to="/form">
              <Subtitle className="animate__animated animate__pulse animate__slower	animate__infinite" />
            </Link>{" "}
          </header>
          <section>
            <About />
          </section>
          <section>
            <Instruction />
          </section>
          <footer className={styles.footer}>
            <Title2 className={styles.titleSmall} text="Напиши нам" />
            <Contacts />
          </footer>
        </div>
      </Route>
      <Route path="/form" exact>
        <Form onAdd={handleAdd} />
        <Link to="/">
          <LinkBack className={styles.link} />
        </Link>
      </Route>
      <Route path="/story">
        {story ? (
          <Story
            protagonist={story.protagonist}
            place={story.place}
            name={story.name}
            helper={story.helper}
            power={story.power}
            mood={story.mood}
          />
        ) : (
          <Redirect to="/form" />
        )}
      </Route>
    </Switch>
  );
}

export default App;
