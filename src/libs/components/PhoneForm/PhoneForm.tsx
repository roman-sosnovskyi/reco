import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./PhoneForm.module.scss";
import { PhoneFormProps } from "./types/PhoneForm.types";

type FormValues = {
  phoneNumber: string;
};

const PhoneForm = ({ className }: PhoneFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data; /* Waiting logic */
  };

  return (
    <form
      className={`${styles.phone_form_container} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className={styles.form_text}>Номер телефону</span>
      <div className={styles.input_wrapper}>
        <input
          className={styles.phone_input}
          type="tel"
          placeholder="__ ___ __ __"
          {...register("phoneNumber", {
            required: "Це поле обов'язкове",
            pattern: {
              value: /^\d{9}$/,
              message: "Невірний формат номеру телефону"
            }
          })}
        />
      </div>
      {errors.phoneNumber && (
        <span className={styles.error_message}>
          {errors.phoneNumber.message}
        </span>
      )}
    </form>
  );
};

export default PhoneForm;
