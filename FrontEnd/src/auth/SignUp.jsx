import Navbar from "@/components/ui/shared/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    file: "",
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const userDataHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userFileDataHandler = (e) => {
    setUserData({ ...userData, file: e.target.files[0] });
  };

  const formSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/users/register`,
        userData
      );
      const data = await response.data;
      if (data.success === true) {
        setLoader(false);
        setUserData({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          role: "",
          file: "",
        });
        navigate("/");
        return toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      setLoader(false);
      return toast.success(error.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh] w-full">
        <form onSubmit={formSubmitHandler}>
          <Card className="mx-auto w-[40rem]">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={userData.fullName}
                    onChange={userDataHandler}
                    required
                  />
                </div>
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
                    type="password"
                    value={userData.password}
                    onChange={userDataHandler}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="number"
                    value={userData.phone}
                    onChange={userDataHandler}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6 items-center">
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
                          type="radio"
                          name="role"
                          value="recruiter"
                          checked={userData.role === "recruiter"}
                          onChange={userDataHandler}
                          className="cursor-pointer w-4"
                        />
                        <Label htmlFor="r2">Recruiter</Label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="profile">Profile</Label>
                      <Input
                        id="profile"
                        type="file"
                        name="file"
                        value={userData.file}
                        onChange={userFileDataHandler}
                      />
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={loader}>
                  {loader ? (
                    <>
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" />
                        Create an account
                      </span>
                    </>
                  ) : (
                    "Create an account"
                  )}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline text-secondary font-medium"
                >
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </>
  );
};

export default SignUp;
