import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "./types/FeedbackForm.types";

import style from "./FeedbackForm.module.scss";
import Icon from "../Icon/Icon";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInput>();
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
            required: "Це поле обовʼязкове"
          })}
          type="text"
          placeholder="Введіть ваше імʼя"
          className={style.feedbackInput}
        />

        {errors.name && (
          <p className={style.inputError}>{errors.name.message}</p>
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
            maxLength={13}
            {...register("phoneNumber", {
              required: "Це поле обовʼязкове"
            })}
            type="tel"
            className={style.feedbackInput}
            placeholder="+380 __ ___ __ __"
          />
          <Icon
            name="icon-phone"
            color="none"
            stroke="#96989B"
            size={24}
            style={{
              position: "absolute",
              top: -6,
              right: 12,
              width: 24,
              minHeight: 1,
              minWidth: 1
            }}
          />
        </div>

        {errors.phoneNumber && (
          <p className={style.inputError}>{errors.phoneNumber.message}</p>
        )}
      </div>

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default FeedbackForm;
