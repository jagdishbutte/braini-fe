import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"md"} />}
        size="md"
        title={"Share"}
      ></Button>

      <Button
        variant={"secondary"}
        startIcon={<ShareIcon size={"lg"} />}
        size="lg"
        title={"Share"}
      ></Button>

      <Button
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"} />}
        size="sm"
        title={"Share"}
      ></Button>
    </>
  );
}

export default App;
