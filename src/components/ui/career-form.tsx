"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-hot-toast";
import content from "@/lib/content/career.json";
import { PatternFormat } from "react-number-format";
import { twMerge } from "tailwind-merge";

const phonePattern = /^\+\s\d{2}\s\(\d{3}\)\s\d{2}\s\d{2}\s\d{3}$/;

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Incorrect name" }).trim(),
  email: z.string().email().min(5, { message: "Incorrect email" }).trim(),
  position: z.string().min(5, { message: "Incorrect position" }).trim(),
  phone: z.string().refine((phone) => phonePattern.test(phone), {
    message: "Incorrect phone",
  }),
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
    formState: { errors, isSubmitting },
  } = useForm<CareerFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: CareerFormValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        localStorage.setItem("career-form", JSON.stringify(data));
        toast.success("Thank you. We will contact you.");
        resolve();
      }, 1000);
      reset();
    });
  };

  const variables = {
    label:
      "block text-xs/6  font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder max-md:mb-6 block w-full border-0 px-2 text-input text-white outline-none mt-3 md:mt-1",
    textarea:
      "bg-input-background placeholder:text-input-placeholder md:h-full block w-full border-0 px-2 text-input text-white outline-none resize-none overflow-hidden max-md:mb-4",
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
            htmlFor="fullName"
            className={twMerge(
              variables.label,
              errors.fullName ? "text-rose-500" : "",
            )}
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
          >
            E-mail:
            <input
              {...register("email")}
              placeholder="E-mail..."
              aria-invalid={errors.email ? "true" : "false"}
              className={variables.input}
            />
          </label>
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
          >
            Position:
            <input
              {...register("position")}
              placeholder="Movie maker..."
              aria-invalid={errors.email ? "true" : "false"}
              className={variables.input}
            />
          </label>
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
          >
            Phone:
            <Controller
              name="phone"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <PatternFormat
                  name={field.name}
                  type="text"
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={variables.input}
                  placeholder="+ 38 (097) 12 34 567"
                  format="+ 38 (###) ## ## ###"
                  value={field.value}
                  onValueChange={(values) =>
                    field.onChange(values.formattedValue)
                  }
                />
              )}
            />
          </label>
          {errors.phone && (
            <p role="alert" className={variables.error}>
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="relative overflow-hidden md:order-4 md:col-start-2 md:row-span-4 md:row-start-2 md:h-full">
          <label className={variables.label}>
            Message:
            <textarea
              {...register("message")}
              rows={8}
              placeholder=""
              aria-invalid={errors.message ? "true" : "false"}
              className={variables.textarea}
            />
          </label>
        </div>

        <div className="relative flex items-start gap-x-2">
          <input
            type="checkbox"
            {...register("isConfirm")}
            id="isConfirm"
            defaultValue="false"
            aria-invalid={errors.isConfirm ? "true" : "false"}
            className="career-checkbox relative h-[22px] w-[22px] shrink-0 appearance-none self-center border border-white bg-none p-1 hover:cursor-pointer focus:cursor-pointer md:self-start xl:h-6 xl:w-6"
          />

          <label
            className="text-left text-xs/[22px] font-extralight hover:cursor-pointer focus:cursor-pointer"
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
          title="send"
          disabled={isSubmitting}
          className="text-decoration ml-auto mr-0 block text-3xl font-medium uppercase text-white xl:text-[32px]/[38px]"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default CareerForm;
