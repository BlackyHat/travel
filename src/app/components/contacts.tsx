import React from "react";
import content from "@/lib/content/contacts.json";
import { splitString } from "@/lib/splitString";
import ContactForm from "../../components/ui/contact-form";

const Contacts = () => {
  const { title, addresses } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section id="contacts" className="contacts-section">
      <div className="section-wrapper">
        <div className="container mx-auto py-14">
          <h2 className="text-4xl-secondary mb-8 uppercase">
            {firstWordTitle}
            <span className="text-4xl-accent">{restOfTitle}</span>
          </h2>
          <ul className="mb-3 flex flex-col gap-y-6  [&>*:last-child]:flex-row-reverse">
            {addresses.map(({ label, contacts, type }) => (
              <li key={label} className=" flex justify-end gap-5 self-end">
                <ul className="min-w-[80px] ">
                  {contacts.map((contact) => {
                    if (typeof contact === "string") {
                      return (
                        <li key={contact}>
                          <a
                            className="text-sm/[24px]"
                            href={`${type}:${contact}`}
                          >
                            {contact}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={contact.name}>
                        <a
                          className="text-sm/[24px]"
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                        >
                          {contact.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <p className="min-w-[80px] self-start py-1 text-xs/[20px] font-extralight">
                  {label}
                </p>
              </li>
            ))}
          </ul>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
