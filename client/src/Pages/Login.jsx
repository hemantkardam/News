import { motion } from "motion/react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@mantine/core";
import { useState } from "react";
function Login() {
  const [eyeIcon, setEyeIcon] = useState(false);
  const handleClick = () => {
    setEyeIcon(!eyeIcon);
  };
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-96 rounded-xl p-4 shadow-md bg-white "
      >
        <h1 className="text-center text-2xl font-bold mb-4">Welcome back</h1>
        <form>
          <div className="flex gap-2 mb-5">
            <Mail className="text-gray-500" />
            <input
              type="mail"
              placeholder="Enter Email...."
              className="focus:outline-none w-full border-b"
            />
          </div>
          <div className="flex gap-2 mb-5 relative">
            <Lock className="text-gray-500" />
            <div onClick={handleClick} className="absolute right-2">
              {eyeIcon ? <Eye /> : <EyeOff />}
            </div>
            <input
              type={eyeIcon ? "text" : "password"}
              placeholder="Enter Password"
              className="focus:outline-none w-full border-b"
            />
          </div>
          <Button variant="full">Login</Button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
