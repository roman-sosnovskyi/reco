import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types/FeedbackForm.types";

import style from "./FeedbackForm.module.scss";
import Icon from "../Icon/Icon";
import { ChangeEvent } from "react";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<FormInput>();

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length < 4) {
      setValue("phoneNumber", "+380 ");
      return;
    }

    const formatted =
      `+${value.slice(0, 3)} ${value.slice(3, 5)} ${value.slice(5, 8)} ${value.slice(8, 10)} ${value.slice(10, 12)}`.trim();
    setValue("phoneNumber", formatted);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.feedbackForm}>
      <div className={style.feedbackInputContainer}>
        <label htmlFor="name" className={style.feedbackInputLabel}>
          Ім&#39;я
          <Icon
            name="icon-star"
            color="yellow"
            size={24}
            width={24}
            style={{ height: 24, minHeight: 1, minWidth: 1, marginLeft: 10 }}
          />
        </label>

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
          className={`${style.feedbackInput} ${errors.name ? style.inputError : ""}`}
        />

        {errors.name && (
          <p className={style.inputErrorText}>{errors.name.message}</p>
        )}
      </div>

      <div className={style.feedbackInputContainer}>
        <label htmlFor="phoneNumber" className={style.feedbackInputLabel}>
          Номер телефону
          <Icon
            name="icon-star"
            color="yellow"
            size={24}
            width={24}
            style={{ height: 24, minHeight: 1, minWidth: 1, marginLeft: 10 }}
          />
        </label>

        <div className={style.phoneNumberInputContainer}>
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
            className={`${style.feedbackInput} ${errors.phoneNumber ? style.inputError : ""}`}
            placeholder="+380 __ ___ __ __"
            onChange={handlePhoneChange}
            onFocus={handlePhoneChange}
          />
          <Icon
            name="icon-phone"
            color="none"
            stroke="#96989B"
            size={24}
            style={{
              position: "absolute",
              top: -6,
              right: 13,
              width: 24,
              minHeight: 1,
              minWidth: 1
            }}
          />
        </div>

        {errors.phoneNumber && (
          <p className={style.inputErrorText}>{errors.phoneNumber.message}</p>
        )}
      </div>

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default FeedbackForm;
