interface PlusIconProps {
  size: "sm" | "md" | "lg";
}

const sizeVariants = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

export function YoutubeIcon(props: PlusIconProps) {
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
        d="M21.8 8.001a2.754 2.754 0 0 0-1.933-1.948C18.144 6 12 6 12 6s-6.144 0-7.867.053A2.754 2.754 0 0 0 2.2 8.001C2 9.786 2 12 2 12s0 2.214.2 4.001a2.754 2.754 0 0 0 1.933 1.948C5.856 18 12 18 12 18s6.144 0 7.867-.053a2.754 2.754 0 0 0 1.933-1.948C22 14.214 22 12 22 12s0-2.214-.2-4.001ZM10 9.75v4.5l4-2.25-4-2.25Z"
      />
    </svg>
  );
}
