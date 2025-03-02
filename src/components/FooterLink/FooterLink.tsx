import { FooterButton } from "./types/FooterLink.types";
import React from "react";
import classNames from "classnames";
import styles from "./FooterLink.module.scss";
import { Link } from "react-router-dom"; // Если используется React Router

const footerButtons: FooterButton[] = [
  { title: "Каталог", link: "/" },
  { title: "Про нас", link: "/about" },
  { title: "Контакти", link: "/contacts" },
  { title: "Відгуки", link: "/feedback" }
];

const FooterLinks: React.FC = () => {
  return (
    <div className={classNames(styles.footerLinks)}>
      {footerButtons.map((button) => (
        <Link
          key={button.link}
          to={button.link}
          className={classNames(styles.footerLink)}
          aria-label={button.title}
        >
          {button.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
