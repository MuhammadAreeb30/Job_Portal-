import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/ui/shared/Navbar";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const userDataHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const response = await axios.post(
        `${import.meta.env.VITE_USER_URI}/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      var data = await response.data;
      if (data.success === true) {
        setUserData({ email: "", password: "", role: "" });
        setLoader(false);
        navigate("/");
        return toast.success(data.message);
      }
    } catch (error) {
      setLoader(false);
      return toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh]">
        <form onSubmit={formSubmitHandler}>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={userDataHandler}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={userDataHandler}
                  type="password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Input
                      name="role"
                      type="radio"
                      value="student"
                      checked={userData.role === "student"}
                      onChange={userDataHandler}
                      className="cursor-pointer w-4"
                    />
                    <Label htmlFor="r1">Student</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      name="role"
                      type="radio"
                      value="recruiter"
                      checked={userData.role === "recruiter"}
                      onChange={userDataHandler}
                      className="cursor-pointer w-4"
                    />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                className="w-full bg-primary"
                disabled={loader}
              >
                {loader ? (
                  <>
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" />
                      Sign in
                    </span>
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  to="/sign-up"
                  className="underline text-secondary font-medium"
                >
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
};

export default Login;
