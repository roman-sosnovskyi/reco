import { FooterButton } from "./types/FooterLink.types";
import React from "react";
import classNames from "classnames";
import styles from "./FooterLink.module.scss";

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
        <a
          key={button.title}
          href={button.link}
          className={classNames(styles.footerLink)}
        >
          {button.title}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
