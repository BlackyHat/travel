import content from "@/lib/content/contacts.json";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/ui/contact-form";

const Contacts = () => {
  const { title, phones, emails, socials } = content;

  return (
    <Section id="contacts" className="contacts-section font-normal">
      <SectionHeading title={title} className="mb-9 xl:mb-[72px]" />
      <div className="xl:grid xl:grid-cols-2 xl:gap-5">
        <ul className="max-md:mb-2 md:grid md:grid-cols-2 md:gap-6 md:max-xl:mb-16 xl:auto-rows-auto xl:grid-cols-1 xl:grid-rows-contacts-xl xl:items-start xl:justify-items-center">
          <li className="grid grid-cols-contacts gap-5 max-md:mb-6 xl:grid-cols-2">
            <ul>
              {phones.contacts.map((contact) => (
                <li key={contact} className="text-right">
                  <a
                    className="text-decoration inline-block"
                    href={`tel:${contact.replace(/\s/g, "")}`}
                    title={contact}
                  >
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-left text-xs/6 font-extralight">
              {phones.caption}
            </p>
          </li>
          <li className="grid grid-cols-contacts gap-5 max-md:mb-6 md:max-xl:order-last xl:grid-cols-2">
            <ul>
              {emails.contacts.map((contact) => (
                <li key={contact} className="text-right">
                  <a
                    className="text-decoration inline-block"
                    href={`mailto:${contact}`}
                    title={contact}
                  >
                    {contact}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-left text-xs/6 font-extralight">
              {emails.caption}
            </p>
          </li>
          <li className="grid grid-cols-contacts gap-5 md:max-xl:row-span-2 md:max-xl:grid-cols-contacts-reverse xl:grid-cols-2 xl:self-end">
            <p className="text-right text-xs/6 font-extralight xl:order-last xl:text-left">
              {socials.caption}
            </p>
            <ul>
              {socials.contacts.map(({ name, link }) => (
                <li key={name} className="text-left xl:text-right">
                  <a
                    className="text-decoration inline-block"
                    href={link}
                    title={name}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {/* <ContactForm /> */}
      </div>
    </Section>
  );
};

export default Contacts;
