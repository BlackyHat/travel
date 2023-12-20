"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-hot-toast";
import content from "@/lib/content/career.json";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Incorrect name" }).trim(),
  email: z.string().email().min(5, { message: "Incorrect email" }).trim(),
  position: z.string().min(5, { message: "Incorrect position" }).trim(),
  phone: z.string().min(5, { message: "Incorrect phone" }).trim(),
  message: z.string().trim().optional(),
  isAgree: z.boolean(),
});
type CareerFormValues = z.infer<typeof formSchema>;

const CareerForm = () => {
  const { formAgree, formTitle } = content;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: CareerFormValues) => {
    localStorage.setItem("career-form", JSON.stringify(data));
    reset();
    toast.success("Thank you. We will contact you.");
  };

  const variables = {
    label:
      "mb-3 block text-xs font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder mb-6 block w-full border-0 px-2 text-xl/[24px] font-extralight text-white outline-none",
    textarea: "resize-none overflow-hidden mb-4",
    error:
      "alert absolute -bottom-6 right-0 text-xs/[24px] font-extralight tracking-widest text-rose-500",
  };

  return (
    <>
      <p className="mb-6 ml-24 w-[180px] text-left text-sm font-extralight">
        {formTitle}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <label className={variables.label} htmlFor="fullName">
            Full name:
          </label>
          <input
            {...register("fullName")}
            id="fullName"
            placeholder="Full name..."
            aria-invalid={errors.fullName ? "true" : "false"}
            className={variables.input}
          />
          {errors.fullName && (
            <p role="alert" className={variables.error}>
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="relative">
          <label className={variables.label} htmlFor="email">
            E-mail:
          </label>
          <input
            {...register("email")}
            id="email"
            placeholder="E-mail..."
            aria-invalid={errors.email ? "true" : "false"}
            className={variables.input}
          />
          {errors.email && (
            <p role="alert" className={variables.error}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={variables.label} htmlFor="position">
            Position:
          </label>
          <input
            {...register("position")}
            id="position"
            placeholder="Position..."
            aria-invalid={errors.email ? "true" : "false"}
            className={variables.input}
          />
          {errors.position && (
            <p role="alert" className={variables.error}>
              {errors.position.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={variables.label} htmlFor="phone">
            Phone:
          </label>
          <input
            {...register("phone")}
            id="phone"
            placeholder="Phone..."
            aria-invalid={errors.phone ? "true" : "false"}
            className={variables.input}
          />
          {errors.phone && (
            <p role="alert" className={variables.error}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={variables.label} htmlFor="message">
            Message:
          </label>

          <textarea
            {...register("message")}
            rows={8}
            id="message"
            placeholder=""
            aria-invalid={errors.message ? "true" : "false"}
            className={variables.input + variables.textarea}
          />
        </div>

        <div className="relative flex items-start gap-x-2">
          <input
            {...register("isAgree")}
            type="checkbox"
            aria-invalid={errors.isAgree ? "true" : "false"}
            className={(variables.input, "w-[22px]")}
          />
          <p className="text-left text-xs/[22px] font-extralight">
            {formAgree}
          </p>
          {errors.isAgree && (
            <p role="alert" className={variables.error}>
              {errors.isAgree.message}
            </p>
          )}
        </div>
        {/* <Controller
        name="isAgree"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      /> */}
        <button
          type="submit"
          disabled={!errors}
          className="ml-auto mr-0 block text-3xl font-medium uppercase text-white"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default CareerForm;
