"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-hot-toast";
import content from "@/lib/content/career.json";
import { PatternFormat } from "react-number-format";
import { twMerge } from "tailwind-merge";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Incorrect name" }).trim(),
  email: z.string().email().min(5, { message: "Incorrect email" }).trim(),
  position: z.string().min(5, { message: "Incorrect position" }).trim(),
  phone: z.string().min(20, { message: "Incorrect phone" }),
  message: z.string().trim().optional(),
  isConfirm: z.string({
    required_error: "Confirm is required",
    invalid_type_error: "Confirm must be a applied",
  }),
});
type CareerFormValues = z.infer<typeof formSchema>;

const CareerForm = () => {
  const { formAgree, formTitle } = content;

  const {
    register,
    handleSubmit,
    reset,
    control,
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
      "mb-3 block text-xs/6 md:mb-1 font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder max-md:mb-6 block w-full border-0 px-2 text-[13px]/6 font-extralight text-white outline-none",
    textarea:
      "bg-input-background placeholder:text-input-placeholder md:h-full block w-full border-0 px-2 text-xs/6 font-extralight text-white outline-none resize-none overflow-hidden max-md:mb-4",
    error:
      "alert absolute -bottom-6 right-0 text-xs/6 font-extralight tracking-widest text-rose-500",
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-4"
      >
        <p className="ml-auto mr-0 w-[64%] text-left text-sm font-extralight max-md:mb-6 md:col-span-2 md:ml-0 md:w-[50%] md:text-[13px]/5 md:max-xl:pr-14 md:max-xl:pt-[92px] xl:pr-14 xl:text-lg/6">
          {formTitle}
        </p>
        <div className="relative">
          <label
            className={twMerge(
              variables.label,
              errors.fullName ? "text-rose-500" : "",
            )}
            htmlFor="fullName"
          >
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
          <label
            className={twMerge(
              variables.label,
              errors.email ? "text-rose-500" : "",
            )}
            htmlFor="email"
          >
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
          <label
            className={twMerge(
              variables.label,
              errors.position ? "text-rose-500" : "",
            )}
            htmlFor="position"
          >
            Position:
          </label>
          <input
            {...register("position")}
            id="position"
            placeholder="Movie maker..."
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
          <label
            className={twMerge(
              variables.label,
              errors.phone ? "text-rose-500" : "",
            )}
            htmlFor="phone"
          >
            Phone:
          </label>
          <Controller
            render={({ field }) => (
              <PatternFormat
                id="phone"
                aria-invalid={errors.phone ? "true" : "false"}
                className={variables.input}
                placeholder="+ 38 (097) 12 34 567"
                format="+ 38 (###) ### ## ##"
                {...field}
              />
            )}
            name="phone"
            control={control}
          />

          {errors.phone && (
            <p role="alert" className={variables.error}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="relative overflow-hidden md:order-4 md:col-start-2 md:row-span-4 md:row-start-2 md:h-full">
          <label className={variables.label} htmlFor="message">
            Message:
          </label>

          <textarea
            {...register("message")}
            rows={8}
            id="message"
            placeholder=""
            aria-invalid={errors.message ? "true" : "false"}
            className={variables.textarea}
          />
        </div>

        <div className="relative flex items-start gap-x-2">
          <input
            type="checkbox"
            {...register("isConfirm")}
            id="isConfirm"
            defaultValue="false"
            aria-invalid={errors.isConfirm ? "true" : "false"}
            className="career-checkbox relative h-[22px] w-[22px] shrink-0 appearance-none self-center border border-white bg-none p-1 md:self-start xl:h-6 xl:w-6"
          />

          <label
            className="text-left text-xs/[22px] font-extralight"
            htmlFor="isConfirm"
          >
            {formAgree}
          </label>
          {errors.isConfirm && (
            <p role="alert" className={variables.error}>
              {errors.isConfirm.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!errors}
          className="ml-auto mr-0 block text-3xl font-medium uppercase text-white xl:text-[32px]/[38px]"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default CareerForm;
