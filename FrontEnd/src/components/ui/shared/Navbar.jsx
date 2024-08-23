import logo from "@/assets/logo.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-1/4 py-1">
        <div>
          <img src={logo} alt="LOGO" className="w-44" />
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="text-primary">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" className="text-primary">
                Browse
              </Link>
            </li>
          </ul>
          {user ? (
            <>
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="font-medium">Muhammad Areeb</h4>
                      <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button>
                      <User2 size={26} className="pr-2" />
                      View Profile
                    </Button>
                    <Button variant="ghost">
                      <LogOut size={26} className="pr-2" />
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="outline" className="text-primary">
                    Login
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="bg-secondary border-2 border-transparent hover:border-secondary hover:bg-transparent hover:text-secondary">
                    Sign up
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
