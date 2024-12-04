import { useRef } from "react";
import Input from "../components/Input"
import { Button } from "../components/ui/Button"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const userNameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
        const username = userNameRef.current?.value;
        const password = passwordRef.current?.value;
        
        await axios.post(BACKEND_URL+"/api/v1/signup", {
            username,
            password
        });
        alert("You have successfully signed up!");
        navigate("/signin");
    }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border p-8 flex flex-col justify-center space-y-4">
        <Input reference={userNameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />

        <Button onClick={signup} variant={"primary"} size="md" title={"Sign Up"}></Button>
        <div className="flex justify-center space-x-2 text-gray-500 ">
          <h1>Alredy a user? </h1>
          <Link to={"/signin"} className="text-purple-600 cursor-pointer">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup