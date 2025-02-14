import { useForm, SubmitHandler } from "react-hook-form";

import { FormInput } from "./types/FeedbackForm.types";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Ім&#39;я</label>

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
        />

        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Номер телефону</label>

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
        />

        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit">Надіслати</button>
    </form>
  );
};

export default FeedbackForm;
