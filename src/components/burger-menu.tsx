"use client";
import { FC, useState } from "react";
import Modal from "@/components/ui/modal";

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
            className="absolute right-5 top-11 text-sm/[17px] font-normal uppercase tracking-widest text-white"
          >
            close
          </button>
          <nav>
            <ul className="flex flex-col items-center justify-center gap-12">
              {navElements.map((el) => (
                <li key={el}>
                  <a
                    href={`#${el}`}
                    className="hover:font-outline focus:font-outline active:font-outline duration-250 p-1 text-lg/[22px] font-normal capitalize tracking-widest"
                    title={`Navigate to ${el}-section`}
                    onClick={onClose}
                  >
                    {el}
                  </a>
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
