"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Incorrect name" }).trim(),
  email: z.string().email().min(5, { message: "Incorrect email" }).trim(),
  message: z.string().trim().optional(),
});
type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    localStorage.setItem("form-contact", JSON.stringify(data));
    reset();
    toast.success("Feedback was sended.");
  };

  const variables = {
    label:
      "mb-3 block text-xs/6 md:mb-1 font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder max-md:mb-6 block w-full border-0 px-2 text-[13px]/6 font-extralight text-white outline-none",
    textarea:
      "resize-none overflow-hidden bg-input-background placeholder:text-input-placeholder block w-full border-0 px-2 text-xs/6 font-extralight text-white outline-none mb-4 xl:mb-6",
    error:
      "alert absolute -bottom-6 right-0 text-xs/6 font-extralight tracking-widest text-rose-500",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:grid-cols-contacts-reverse md:grid md:gap-x-5 md:gap-y-7 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-10">
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
        <div className="relative md:max-xl:order-last">
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

        <div className="relative md:max-xl:row-span-3 xl:col-span-2">
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
