"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "react-hot-toast";

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
    formState: { errors },
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
      "mb-3 block text-xs font-extralight leading-normal tracking-[0.2em] text-white",
    input:
      "bg-input-background placeholder:text-input-placeholder mb-6 block w-full border-0 px-2 text-xl/[24px] font-extralight text-white outline-none",
    textarea: "resize-none overflow-hidden",
    error:
      "alert absolute -bottom-6 right-0 text-xs/[24px] font-extralight tracking-widest text-rose-500",
  };

  return (
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

      <button
        type="submit"
        className="ml-auto mr-0 block text-3xl font-medium uppercase text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
