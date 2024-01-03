import { MouseEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface SliderArrowProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: "next" | "prev";
}

const SliderArrow: FC<SliderArrowProps> = ({ onClick, type }) => {
  return (
    <div
      className={twMerge(
        "absolute bottom-4 z-10 md:w-[120px] xl:bottom-0 xl:w-[313px]",
        type === "next" ? "right-0" : "left-0",
      )}
    >
      <button
        type="button"
        className={twMerge(
          "text-decoration block text-[33px]/10 font-thin uppercase",
          type === "next" ? "ml-0 mr-auto" : "ml-auto mr-0",
        )}
        onClick={onClick}
        title={type}
      >
        {type}
      </button>
    </div>
  );
};

export default SliderArrow;
