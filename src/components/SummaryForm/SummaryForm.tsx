import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./SummaryForm.module.scss";

import { FormInput } from "./types/SummaryForm.types";
import InputLabel from "../InputLabel/InputLabel";
import handlePhoneChange from "@/utils/handlePhoneChange";

const SummaryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    void data;
    reset();
  };

  return (
    <form
      id="summaryForm"
      className={styles.summaryForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={styles.formTitle}>Платіжні дані</h2>
      <div className={styles.inputContainerWrapper}>
        <div className={styles.inputContainer}>
          <InputLabel htmlFor="firstName" required={true}>
            Ім&#39;я
          </InputLabel>

          <input
            id="firstName"
            type="text"
            placeholder="Введіть ім'я"
            {...register("firstName", {
              required: "Це поле обовʼязкове",
              pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’ʼ\s]+$/,
                message: "Імʼя повинно містити тільки букви"
              }
            })}
            className={`${styles.inputField} ${errors.firstName ? styles.inputError : ""}`}
          />

          {errors.firstName && (
            <p className={styles.inputErrorText}>{errors.firstName.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <InputLabel htmlFor="lastName" required={true}>
            Прізвище
          </InputLabel>

          <input
            id="lastName"
            type="text"
            placeholder="Введіть прізвище"
            {...register("lastName", {
              required: "Це поле обовʼязкове",
              pattern: {
                value: /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’ʼ\s]+$/,
                message: "Прізвище повинно містити тільки букви"
              }
            })}
            className={`${styles.inputField} ${errors.lastName ? styles.inputError : ""}`}
          />

          {errors.lastName && (
            <p className={styles.inputErrorText}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <InputLabel htmlFor="phoneNumber" required={true}>
          Телефон
        </InputLabel>

        <input
          id="phoneNumber"
          type="text"
          placeholder="+380 __ ___ __ __"
          {...register("phoneNumber", {
            required: "Це поле обовʼязкове",
            minLength: {
              value: 17,
              message: "Введіть повний номер"
            }
          })}
          onChange={(event) => handlePhoneChange(event, setValue)}
          onFocus={(event) => handlePhoneChange(event, setValue)}
          className={`${styles.inputField} ${errors.phoneNumber ? styles.inputError : ""}`}
        />

        {errors.phoneNumber && (
          <p className={styles.inputErrorText}>{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className={styles.inputContainer}>
        <InputLabel htmlFor="country" required={true}>
          Країна / Регіон
        </InputLabel>

        <input
          id="country"
          type="text"
          className={styles.inputField}
          placeholder="Україна"
        />

        {errors.country && (
          <p className={styles.inputErrorText}>{errors.country.message}</p>
        )}
      </div>

      <div className={styles.inputContainerWrapper}>
        <div className={styles.inputContainer}>
          <InputLabel htmlFor="city" required={true}>
            Місто
          </InputLabel>

          <input
            id="city"
            type="text"
            className={styles.inputField}
            placeholder="Виберіть місто"
          />

          {errors.city && (
            <p className={styles.inputErrorText}>{errors.city.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <InputLabel htmlFor="postOffice" required={true}>
            Відділення
          </InputLabel>

          <input
            id="postOffice"
            type="text"
            className={styles.inputField}
            placeholder="Виберіть відділення"
          />

          {errors.postOffice && (
            <p className={styles.inputErrorText}>{errors.postOffice.message}</p>
          )}
        </div>
      </div>

      <div className={styles.inputContainer}>
        <InputLabel htmlFor="comment">Нотатки до замовлення</InputLabel>

        <textarea
          id="comment"
          className={styles.inputField}
          placeholder="Наприклад спеціальні нотатки для доставки"
        />

        {errors.comment && (
          <p className={styles.inputErrorText}>{errors.comment.message}</p>
        )}
      </div>
    </form>
  );
};

export default SummaryForm;
