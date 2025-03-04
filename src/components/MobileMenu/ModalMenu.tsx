import { navigationButtons } from "@/constants/navigationButtons";
import NavBar from "../NavBar/NavBar";
import NavButtons from "../NavButtons/NavButton";
import styles from "./ModalMenu.module.scss";

const ModalMenu = () => {
  return (
    <div className={styles.modal}>
      <NavBar>
        <NavButtons
          labels={navigationButtons.map((button) => button.title)}
          buttons={navigationButtons}
        />
      </NavBar>
    </div>
  );
};

export default ModalMenu;
