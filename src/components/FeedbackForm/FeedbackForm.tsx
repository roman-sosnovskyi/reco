import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types/FeedbackForm.types";

import style from "./FeedbackForm.module.scss";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.feedbackForm}>
      <div className={style.feedbackInputContainer}>
        <label htmlFor="name" className={style.feedbackInputLabel}>
          Ім&#39;я
        </label>

        <input
          id="name"
          {...register("name", {
            required: "Це поле обовʼязкове",
            pattern: {
              value: /^[A-Za-zA-Яа-яЁё\s]+$/,
              message: "Імʼя повинно містити тільки букви"
            }
          })}
          type="text"
          placeholder="Введіть ваше імʼя"
          className={style.feedbackInput}
        />

        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className={style.feedbackInputContainer}>
        <label htmlFor="phoneNumber" className={style.feedbackInputLabel}>
          Номер телефону
        </label>

        <input
          id="phoneNumber"
          maxLength={9}
          {...register("phoneNumber", {
            required: "Це поле обовʼязкове",
            pattern: {
              value: /^\d{9}$/,
              message: "Невірний формат номеру телефону"
            }
          })}
          type="tel"
          className={style.feedbackInput}
        />

        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default FeedbackForm;
