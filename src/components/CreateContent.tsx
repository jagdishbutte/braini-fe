import CrossIcon from "../icons/CrossIcon";
import Input from "./Input";
import { Button } from "./ui/Button";

function CreateContent({open, onClose}: {open: boolean, onClose: () => void}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-6 rounded-lg space-y-4">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button variant={"primary"} size="md" title={"Submit"} />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContent