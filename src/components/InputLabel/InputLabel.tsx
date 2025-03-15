import Icon from "@/components/Icon/Icon";

import styles from "./InputLabel.module.scss";
import { InputLableProps } from "./types/InputLabel.types";

const InputLabel = ({ htmlFor, children, required }: InputLableProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className={styles.inputLabel}>
        {children}
        {required && (
          <Icon
            className={styles.inputIconStar}
            name="icon-star"
            stroke="#fbc000"
            size={20}
          />
        )}
      </label>
    </>
  );
};

export default InputLabel;
