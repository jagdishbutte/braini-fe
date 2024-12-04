import Input from "../components/Input"
import { Button } from "../components/ui/Button"

function Signup() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border p-8 flex flex-col justify-center space-y-4">
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />

        <Button variant={"primary"} size="md" title={"Sign Up"}></Button>
        <div className="flex justify-center space-x-2 text-gray-500 ">
          <h1>Alredy a user? </h1>
          <span className="text-purple-600 cursor-pointer">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Signup