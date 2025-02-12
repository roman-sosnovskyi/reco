import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./NavButtons.module.scss";
import { NavButtonsProps } from "./types/NavButton.types";

const NavButtons: FC<NavButtonsProps> = ({ buttons }) => (
  <div className={styles.nav_btns}>
    {buttons.map(({ title, link }) => (
      <Link key={title} to={link}>
        <Button variant="black">{title}</Button>
      </Link>
    ))}
  </div>
);

export default NavButtons;
