import { useRef } from "react";
import Input from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
    const userNameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
      const username = userNameRef.current?.value;
      const password = passwordRef.current?.value;

      const response = await axios.post(BACKEND_URL+"/api/v1/signin", {
        username,
        password,
      });
      
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/home");
    }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border p-8 flex flex-col justify-center space-y-4">
        <Input reference={userNameRef} placeholder="Username" />
        <Input reference={passwordRef} placeholder="Password" />

        <Button
          onClick={signin}
          variant={"primary"}
          size="md"
          title={"Sign In"}
        ></Button>
        <div className="flex justify-center space-x-2 text-gray-500 ">
          <h1>Not a user? </h1>
          <Link to={"/signup"} className="text-purple-600 cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
