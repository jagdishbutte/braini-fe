import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem"

function Sidebar() {
  return (
    <div className="h-screen bg-white border-r shadow-lg w-72 fixed pl-4">
      <div className="pt-8">
        <LogoIcon />
      </div>
      <div className="mt-6 ml-4 space-y-2">
        <SidebarItem text="Twitter" icon={<TwitterIcon size="md" />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon size="md" />} />
      </div>
    </div>
  );
}

export default Sidebar