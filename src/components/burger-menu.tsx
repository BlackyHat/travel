"use client";
import { FC, useState } from "react";
import Modal from "@/components/ui/modal";
import ScrollLink from "@/components/ui/scroll-link";

interface BurgerMenuProps {
  navElements: string[];
}
const BurgerMenu: FC<BurgerMenuProps> = ({ navElements }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  const onClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="text-sm font-normal uppercase tracking-[1.4px] text-white md:hidden"
      >
        menu
      </button>

      {isOpen && (
        <Modal onClose={onClose}>
          <button
            type="button"
            onClick={onClose}
            className="text-decoration absolute right-5 top-11 text-sm/[17px] font-normal uppercase tracking-widest text-white"
          >
            close
          </button>
          <nav>
            <ul className="flex flex-col items-center justify-center gap-3">
              {navElements.map((el) => (
                <li key={el}>
                  <ScrollLink
                    href={`#${el}`}
                    className="text-decoration p-1 text-lg/[22px] font-normal capitalize tracking-widest"
                    title={`Navigate to ${el}-section`}
                    onClose={onClose}
                  >
                    {el}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </Modal>
      )}
    </>
  );
};

export default BurgerMenu;
