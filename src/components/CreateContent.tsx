import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Input from "./Input";
import { Button } from "./ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

enum ContentType {
  YouTube = "youtube",
  Twitter = "twitter",
}

function CreateContent({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.YouTube);
  const navigate = useNavigate();

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      BACKEND_URL + "/api/v1/content",
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  const addContentAndCloseModal = () => {
    addContent();
    navigate("/home");
  };

  return (
    <div>
      {open && (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-500 bg-opacity-80"></div>

          {/* Modal */}
          <div className="relative flex flex-col justify-center bg-white p-6 rounded-lg border-2 min-h-56 min-w-96 z-10">
            <div className="flex justify-end">
              <div onClick={onClose} className="cursor-pointer">
                <CrossIcon size="md" />
              </div>
            </div>
            <div className="flex justify-center text-slate-500 font-semibold">
              Create New Brain!
            </div>
            <div className="space-y-4 mt-4 flex flex-col items-center justify-center">
              <Input reference={titleRef} placeholder={"Title"} />
              <Input reference={linkRef} placeholder={"Link"} />
            </div>
            <div>
              <div className="flex gap-4 justify-center mt-2">
                <Button
                  size="sm"
                  variant={
                    type === ContentType.YouTube ? "primary" : "secondary"
                  }
                  title={"YouTube"}
                  onClick={() => setType(ContentType.YouTube)}
                />
                <Button
                  size="sm"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                  title={"Twitter"}
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                onClick={addContentAndCloseModal}
                variant={"primary"}
                size="md"
                title={"Add"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContent;
