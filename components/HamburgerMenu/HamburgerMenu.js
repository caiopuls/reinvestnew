import React from "react";
import styles from "../../styles/HamburgerMenu.module.scss";

//Components
import Hamburger from "./Hamburger";
import Menu from "./Menu";

//Main JSX
class HamburgerMenu extends React.Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    console.log("G3T 0ut of H3R3!!!");
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <>
        <Hamburger
          onClick={this.handleClick}
          className={
            this.state.isOpen
              ? `${styles.hamburger} ${styles.hamburgeractive}`
              : styles.hamburger
          }
        />
        <Menu
          className={
            this.state.isOpen
              ? `${styles.navigation} ${styles.navigationactive}`
              : styles.navigation
          }
        />
      </>
    );
  }
}

export default HamburgerMenu;