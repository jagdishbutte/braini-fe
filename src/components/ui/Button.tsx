
import { ReactElement } from "react";

interface ButtonInterface {
    title?: string;
    size: "lg" | "sm" | "md";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    variant: "primary" | "secondary";
    onClick?: ()=> void;
}

const sizeStyles = {
    "lg": "px-6 py-3 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-lg",
    "sm": "px-2 py-1 text-sm rounded-md",
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}

export function Button(props: ButtonInterface) {
    const { title, size, startIcon, endIcon, variant, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={sizeStyles[size] + " " + variantStyles[variant]}
      >
        <div className="flex items-center justify-center">
          {startIcon}
          <div className="pl-1 pr-1">{title}</div>
          {endIcon}
        </div>
      </button>
    );
}
