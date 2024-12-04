import { useState } from "react";
import Card, { CardProps } from "../components/Card";
import CreateContent from "../components/CreateContent";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import useContent from "../hooks/useContent";
import { LogoIcon } from "../icons/LogoIcon";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-200">
        <CreateContent
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="fixed top-0 left-0 w-screen h-16 bg-white shadow-md flex items-center justify-between px-6 z-50">
          <div>
            <LogoIcon/>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => setModalOpen(true)}
              variant={"primary"}
              startIcon={<PlusIcon size={"md"} />}
              size="lg"
              title={"Add Content"}
            />
            <Button
              variant={"secondary"}
              startIcon={<ShareIcon size={"md"} />}
              size="lg"
              title={"Share Brain"}
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex gap-2">
            {contents.map(({ type, link, title }: CardProps) => (
              <Card title={title} link={link} type={type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
