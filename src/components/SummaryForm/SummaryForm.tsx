import { useForm } from "react-hook-form";

import styles from "./SummaryForm.module.scss";

import { FormInput } from "./types/SummaryForm.types";
import InputLabel from "../InputLabel/InputLabel";
import handlePhoneChange from "@/utils/handlePhoneChange";

const SummaryForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    // reset,
    setValue
  } = useForm<FormInput>();

  return (
    <form className={styles.summaryForm}>
      <h2 className={styles.formTitle}>Платіжні дані</h2>
      <div className={styles.inputContainerWrapper}>
        <div className={styles.inputContainer}>
          <InputLabel htmlFor="firstName" required={true}>
            Ім&#39;я
          </InputLabel>

          <input
            id="firstName"
            type="text"
            className={styles.inputField}
            placeholder="Введіть ім'я"
          />

          {errors.firstName && (
            <p className={styles.inputError}>{errors.firstName.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <InputLabel htmlFor="lastName" required={true}>
            Прізвище
          </InputLabel>

          <input
            id="lastName"
            type="text"
            className={styles.inputField}
            placeholder="Введіть прізвище"
          />

          {errors.lastName && (
            <p className={styles.inputError}>{errors.lastName.message}</p>
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
          className={styles.inputField}
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
        />

        {errors.phoneNumber && (
          <p className={styles.inputError}>{errors.phoneNumber.message}</p>
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
          <p className={styles.inputError}>{errors.country.message}</p>
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
            <p className={styles.inputError}>{errors.city.message}</p>
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
            <p className={styles.inputError}>{errors.postOffice.message}</p>
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
          <p className={styles.inputError}>{errors.comment.message}</p>
        )}
      </div>
    </form>
  );
};

export default SummaryForm;
