import { ReactNode } from "react";

function SidebarItem({text, icon}: {
    text: string;
    icon: ReactNode;
}) {
  return (
    <div className="flex items-center py-1 px-1 space-x-1 text-gray-500 font-semibold cursor-pointer hover:bg-gray-200 rounded-md max-w-48 transition-all duration-200">
      <div className="">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
}

export default SidebarItem