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
        "absolute bottom-4 z-10 text-[33px]/10 font-thin uppercase md:w-[120px] xl:bottom-0 xl:w-[313px]",
        type === "next" ? "right-0 text-left" : "left-0 text-right",
      )}
      onClick={onClick}
      title={type}
    >
      {type}
    </button>
  );
};

export default SliderArrow;
