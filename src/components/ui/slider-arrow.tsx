import { MouseEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface SliderArrowProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: "next" | "prev";
}

const SliderArrow: FC<SliderArrowProps> = ({ onClick, type }) => {
  return (
    <button
      className={twMerge(
        "text-decoration absolute bottom-4 z-10 w-28 text-[33px]/10 font-thin uppercase xl:bottom-0 xl:w-72",
        type === "next" ? "right-0 text-left" : "left-0 text-right",
      )}
      onClick={onClick}
    >
      {type}
    </button>
  );
};

export default SliderArrow;
