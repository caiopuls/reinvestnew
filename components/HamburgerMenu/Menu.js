//Core
import { Button } from "@material-ui/core";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import styles from "../../styles/HamburgerMenu.module.scss";

const Menu = ({ className }) => (
    <div className={className}>
        <ul className={styles.navigation__list}>
            <ScrollIntoView selector="#section-1">
                <Button id="li-mb" className={styles.navigation__item}>
                    FAÇA UMA SIMULAÇÃO
                </Button>
            </ScrollIntoView>
            <hr />
            <ScrollIntoView selector="#about">
                <Button id="li-mb" className={styles.navigation__item}>
                    QUEM SOMOS
                </Button>
            </ScrollIntoView>
            <hr />
            <ScrollIntoView selector="#steps">
                <Button id="li-mb" className={styles.navigation__item}>
                    ETAPAS DO CONSÓRCIO
                </Button>
            </ScrollIntoView>
            <hr />
            <ScrollIntoView selector="#questions">
                <Button id="li-mb" className={styles.navigation__item}>
                    DÚVIDAS
                </Button>
            </ScrollIntoView>
            <hr />
            <ScrollIntoView selector="#contact">
                <Button id="li-mb" className={styles.navigation__item}>
                    CONTATO
                </Button>
            </ScrollIntoView>
        </ul>
    </div>
);

export default Menu;
