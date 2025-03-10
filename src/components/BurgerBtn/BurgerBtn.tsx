import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./BurgerBtn.module.scss";
import classNames from "classnames";
import ModalMenu from "../MobileMenu/ModalMenu";

const BurgerBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  return (
    <>
      <button
        type="button"
        className={classNames(styles.burgerBtn, { [styles.open]: modalIsOpen })}
        onClick={() => {
          setModalIsOpen((prev) => !prev);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {createPortal(<ModalMenu isOpen={modalIsOpen} />, document.body)}
    </>
  );
};

export default BurgerBtn;
