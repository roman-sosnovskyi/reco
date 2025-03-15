import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types/FeedbackForm.types";

import styles from "./FeedbackForm.module.scss";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import useDeviceDetection from "@/hooks/useDeviceDetection";
import handlePhoneChange from "@/utils/handlePhoneChange";
import InputLabel from "../InputLabel/InputLabel";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormInput>();

  const { isMobile, isTablet } = useDeviceDetection();

  const getButtonSize = () => {
    if (isMobile) return "s";
    if (isTablet) return "m";
    return "l";
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    void data;
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.feedbackForm}>
      <div className={styles.feedbackInputContainer}>
        <InputLabel htmlFor="name" required={true}>
          Ім&#39;я
        </InputLabel>
        <input
          id="name"
          {...register("name", {
            required: "Це поле обовʼязкове",
            pattern: {
              value: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’ʼ\s]+$/,
              message: "Імʼя повинно містити тільки букви"
            }
          })}
          type="text"
          placeholder="Введіть ваше імʼя"
          className={`${styles.feedbackInput} ${errors.name ? styles.inputError : ""}`}
        />

        {errors.name && (
          <p className={styles.inputErrorText}>{errors.name.message}</p>
        )}
      </div>

      <div className={styles.feedbackInputContainer}>
        <InputLabel htmlFor="phoneNumber" required={true}>
          Номер телефону
        </InputLabel>

        <div className={styles.phoneNumberInputContainer}>
          <input
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Це поле обовʼязкове",
              minLength: {
                value: 17,
                message: "Введіть повний номер"
              }
            })}
            type="tel"
            className={`${styles.feedbackInput} ${errors.phoneNumber ? styles.inputError : ""}`}
            placeholder="+380 __ ___ __ __"
            onChange={(event) => handlePhoneChange(event, setValue)}
            onFocus={(event) => handlePhoneChange(event, setValue)}
          />
          <Icon
            name="icon-phone"
            color="none"
            stroke="#96989B"
            className={styles.inputIconPhone}
          />
        </div>

        {errors.phoneNumber && (
          <p className={styles.inputErrorText}>{errors.phoneNumber.message}</p>
        )}
      </div>

      <Button
        variant="primary"
        size={getButtonSize()}
        className="feedbackButton"
      >
        <div className={styles.iconContainer}>
          <Icon
            name="icon-arrow-up-right2"
            size={isMobile ? 20 : 30}
            fill="white"
            stroke="none"
            className={styles.feedbackButtonIcon}
          />
        </div>
        <span className={styles.feedbackButtonText}> НАДІСЛАТИ</span>
      </Button>
    </form>
  );
};

export default FeedbackForm;
