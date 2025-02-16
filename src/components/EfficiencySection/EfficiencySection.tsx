import { EfficiencySectionProps } from "./types/EfficiencySection.types";
import classNames from "classnames";
import styles from "./EfficiencySection.module.scss";

const EfficiencySection = ({ className }: EfficiencySectionProps) => {
  const classes = classNames(styles.efficiency_sec, className);

  return <section className={classes}></section>;
};

export default EfficiencySection;
