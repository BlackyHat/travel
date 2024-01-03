"use client";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormPersist from "react-hook-form-persist";
import { toast } from "react-hot-toast";
import * as z from "zod";
import { twMerge } from "tailwind-merge";

const FORM_NAME = "form-contact";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Incorrect name" }).trim(),
  email: z.string().email().min(5, { message: "Incorrect email" }).trim(),
  message: z.string().trim().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const initFormData = {
  fullName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(() => {
    try {
      const storedFormData = window.sessionStorage.getItem(FORM_NAME);
      return storedFormData ? JSON.parse(storedFormData) : initFormData;
    } catch (error) {
      return initFormData;
    }
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  useFormPersist(FORM_NAME, {
    watch,
    setValue,
  });

  const onSubmit = (data: ContactFormValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        toast.success("Feedback was sended.");
        resolve();
      }, 1000);
      reset();
    });
  };

  const variables = {
    label:
      "block text-xs/6 font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder max-md:mb-6 block w-full border-0 px-2 text-input text-white outline-none mt-3 md:mt-1",
    textarea:
      "resize-none overflow-hidden bg-input-background placeholder:text-input-placeholder block w-full border-0 px-2 text-input text-white outline-none mb-4 xl:mb-6 mt-3 md:mt-1",
    error:
      "alert absolute -bottom-6 right-0 text-xs/6 font-extralight tracking-widest text-rose-500",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} name={FORM_NAME}>
      <div className="md:grid md:grid-cols-contacts-reverse md:gap-x-5 md:gap-y-7 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-10">
        <div className="relative">
          <label
            className={twMerge(
              variables.label,
              errors.fullName ? "text-rose-500" : "",
            )}
          >
            Full name:
            <input
              {...register("fullName")}
              placeholder="Full name..."
              aria-invalid={errors.fullName ? "true" : "false"}
              className={variables.input}
            />
          </label>
          {errors.fullName && (
            <p role="alert" className={variables.error}>
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="relative md:max-xl:order-last">
          <label
            className={twMerge(
              variables.label,
              errors.email ? "text-rose-500" : "",
            )}
          >
            E-mail:
          </label>
          <input
            {...register("email")}
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

        <div className="relative md:max-xl:row-span-3 xl:col-span-2">
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
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        title="send"
        className="text-decoration ml-auto mr-0 block text-3xl font-medium uppercase text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
