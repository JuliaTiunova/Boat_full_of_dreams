import styles from "./App.module.css";
import "animate.css";
import About from "./components/About/About";
import Button from "./components/Button/Button";
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

function App() {
  const history = useHistory();

  const Greetings = () => {
    return <h1 className={styles.title}>Вітаю, сновидцю!</h1>;
  };

  const [story, setStory] = useState(null);
  const [open, setOpen] = useState(null);

  const handleBurger = (openMenu) => {
    if (!open) {
      setOpen(openMenu);
    } else {
      setOpen(null);
    }
  };

  const handleAdd = (newStory) => {
    setStory(newStory);
    history.push("/story");
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className={styles.wrapper}>
          <header className={styles.header} id="header">
            <a href="#header">
              <div className={styles.logo}></div>
            </a>
            <Menu className={styles.menu} />
            <BurgerButton className={styles.burger} onClick={handleBurger} />
            {open ? <MenuBurger className={styles.burgerMenu} /> : ""}
            <Greetings />
            <Link to="/form">
              <Subtitle className="animate__animated animate__pulse animate__slower	animate__infinite" />
            </Link>{" "}
          </header>
          <section id="about">
            <About />
          </section>
          <section id="instruction">
            <Instruction />
          </section>
          <footer className={styles.footer} id="contact">
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
        <div className={styles.divWrapper}>
          <Link to="/">
            <Button className={styles.storyLink} text="на головну" />
          </Link>
          <Link to="/form">
            <Button className={styles.storyLink} text="до форми" />
          </Link>
        </div>
      </Route>
    </Switch>
  );
}

export default App;
