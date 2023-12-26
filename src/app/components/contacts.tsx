import React from "react";
import content from "@/lib/content/contacts.json";
import { splitString } from "@/lib/splitString";
import ContactForm from "../../components/ui/contact-form";

const Contacts = () => {
  const { title, phones, emails, socials } = content;
  const [firstWordTitle, restOfTitle] = splitString(title, 1);

  return (
    <section
      id="contacts"
      className="contacts-section text-sm/6 font-normal md:text-base/6 xl:text-lg/6"
    >
      <div className="section-wrapper">
        <div className="container mx-auto max-w-[480px] py-14 md:grid md:max-w-[960px] md:py-16 xl:max-w-7xl xl:py-[104px]">
          <h2 className="text-4xl-secondary md:text-5xl-secondary xl:text-6xl-secondary mb-9 uppercase md:mb-[40px] xl:mb-[72px]">
            {firstWordTitle}
            <span className="text-4xl-accent md:text-5xl-accent xl:text-6xl-accent">
              {restOfTitle}
            </span>
          </h2>
          <div className="xl:grid xl:grid-cols-2 xl:gap-5">
            <ul className="xl:grid-rows-contacts-xl max-md:mb-2 md:grid md:grid-cols-2 md:gap-6 md:max-xl:mb-16 xl:auto-rows-auto xl:grid-cols-1 xl:items-start xl:justify-items-center">
              <li className="grid-cols-contacts grid gap-5 max-md:mb-6 xl:grid-cols-2">
                <ul>
                  {phones.contacts.map((contact) => (
                    <li key={contact} className="text-right">
                      <a className="text-decoration" href={`tel:${contact}`}>
                        {contact}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-left text-xs/6 font-extralight">
                  {phones.caption}
                </p>
              </li>
              <li className="grid-cols-contacts grid gap-5 max-md:mb-6 md:max-xl:order-last xl:grid-cols-2">
                <ul>
                  {emails.contacts.map((contact) => (
                    <li key={contact} className="text-right">
                      <a className="text-decoration" href={`mailto:${contact}`}>
                        {contact}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-left text-xs/6 font-extralight">
                  {emails.caption}
                </p>
              </li>
              <li className="grid-cols-contacts md:max-xl:grid-cols-contacts-reverse grid gap-5 md:max-xl:row-span-2 xl:grid-cols-2 xl:self-end">
                <p className="text-right text-xs/6 font-extralight xl:order-last xl:text-left">
                  {socials.caption}
                </p>
                <ul>
                  {socials.contacts.map(({ name, link }) => (
                    <li key={name} className="text-left xl:text-right">
                      <a className="text-decoration" href={link}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
