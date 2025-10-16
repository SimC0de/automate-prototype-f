import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import schoolBuildingImg from "../assets/4e5440422bc29548f7771aa8b4692b5f2cd3c479.png";

export function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please enter email and password");
    }

    toast.success(`Welcome, ${selectedRole}!`);
    return onLogin(selectedRole);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    toast.success("Password reset link sent to your email!");
    setShowForgotPassword(false);
    setEmail("");
  };

  return (
    <div className="relative size-full overflow-hidden bg-white flex">
      <div className="w-1/2 flex flex-col p-16">
        <div className="flex items-start gap-4 mb-12">
          <div className="w-16 h-16 rounded-full bg-[#4a9d6f] flex items-center justify-center flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" fill="white" />
              <path d="M20 8L12 16H16V28H24V16H28L20 8Z" fill="#4a9d6f" />
            </svg>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide mb-1">
              SAN ISIDRO INTEGRATED SCHOOL AUTOMATE
            </p>
            <p className="text-sm text-gray-600">Cabanatuan City</p>
          </div>
        </div>

        <h1 className="text-[2.5rem] mb-16 text-[#4a9d6f]">Automate Portal</h1>

        <div className="max-w-md">
          {!showForgotPassword ? (
            <>
              <h2 className="text-xl mb-8">Please Login to your Account</h2>

              <div className="flex gap-2 mb-8">
                {["Admin", "Teacher", "Student"].map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-6 py-2 rounded-md transition-colors ${
                      selectedRole === role
                        ? "bg-[#4a9d6f] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block mb-2">Email address</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block mb-2">Password</label>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-gray-600 hover:text-gray-800 mt-2 float-right"
                  >
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-black text-white rounded-md hover:bg-gray-800 mt-8"
                >
                  Log in
                </Button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-xl mb-8">Forgot password</h2>

              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div>
                  <label className="block mb-2">Email address</label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 border border-gray-300 rounded-md"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Email password reset link
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Or,{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setEmail("");
                    }}
                    className="text-black hover:underline"
                  >
                    return to log in
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="w-1/2 relative">
        <img
          src={schoolBuildingImg}
          alt="San Isidro Integrated School"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
