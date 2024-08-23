import Navbar from "@/components/ui/shared/Navbar";
import { Link } from "react-router-dom";
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

const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[90vh] w-full">
        <form action="">
          <Card className="mx-auto w-[25rem]">
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
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="number" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Input
                        name="radio"
                        type="radio"
                        className="cursor-pointer w-4"
                      />
                      <Label htmlFor="r1">Student</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        name="radio"
                        type="radio"
                        className="cursor-pointer w-4"
                      />
                      <Label htmlFor="r2">Recruiter</Label>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Create an account
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
