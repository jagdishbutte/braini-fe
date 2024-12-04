import { useState } from "react";
import Card from "../components/Card";
import CreateContent from "../components/CreateContent";
import { Button } from "../components/ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

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

        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant={"primary"}
            startIcon={<PlusIcon size={"lg"} />}
            size="lg"
            title={"Add Content"}
          ></Button>
          <Button
            variant={"secondary"}
            startIcon={<ShareIcon size={"md"} />}
            size="lg"
            title={"Share Brain"}
          ></Button>
        </div>

        <div className="flex gap-2">
          <Card
            title="Linux Watch"
            link="https://x.com/QVHenkel/status/1863450367368757413"
            type="twitter"
          />
          <Card
            title="Project Ideas"
            link="https://www.youtube.com/embed/eZT8RUuWvR8?si=C0bI_hIUpORGNrNf"
            type="youtube"
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
