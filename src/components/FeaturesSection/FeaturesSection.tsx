import { FeaturesSectionProps } from "./types/FeaturesSection.types";
import classNames from "classnames";
import styles from "./EfficiencySection.module.scss";

const FeaturesSection = ({ className }: FeaturesSectionProps) => {
  const classes = classNames(styles.efficiency_sec, className);

  return <section className={classes}></section>;
};

export default FeaturesSection;
