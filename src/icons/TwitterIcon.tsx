interface PlusIconProps {
  size: "sm" | "md" | "lg";
}

const sizeVariants = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export function TwitterIcon(props: PlusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={sizeVariants[props.size]}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.5 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.269 8.269 0 0 1-2.356.636 4.108 4.108 0 0 0 1.804-2.27 8.217 8.217 0 0 1-2.605.98 4.102 4.102 0 0 0-6.993 3.737 11.635 11.635 0 0 1-8.455-4.27 4.1 4.1 0 0 0 1.27 5.471A4.073 4.073 0 0 1 2.8 9.713v.051a4.1 4.1 0 0 0 3.292 4.017 4.11 4.11 0 0 1-1.084.145 4.17 4.17 0 0 1-.772-.073 4.104 4.104 0 0 0 3.832 2.844A8.234 8.234 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.835"
      />
    </svg>
  );
}
