import { Mail, PenIcon, Phone } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import Navbar from "./ui/shared/Navbar";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import Footer from "./Footer";
import UpdateProfileDialog from "./UpdateProfileDialog";

const Profile = () => {
  const skills = ["html", "css", "js"];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div className="shadow-md rounded-md p-4 my-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <div className="flex flex-col">
                <h1 className="text-primary font-bold text-xl">
                  Muhammad Areeb
                </h1>
                <p className="text-gray-800">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis obcaecati numquam corrupti voluptas nisi nam
                  repudiandae, ad at cum aut eos, explicabo dolorum ex ipsam
                  quae, pariatur dignissimos accusantium repellendus. Saepe
                  aspernatur temporibus labore?
                </p>
              </div>
            </div>
            <div>
              <Button variant="outline" onClick={() => setOpen(true)}>
                <PenIcon size={20} />
              </Button>
            </div>
          </div>
          <div>
            <ul className="py-6 flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <Mail size={20} />
                areeb@areeb.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} />
                309098-0098838
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-secondary font-bold">Skills</h2>
            <div className="pt-2">
              {skills.map((skill) => (
                <Badge key={skill} className="mr-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-col py-4">
            <label className="text-2xl text-secondary font-bold">Resume</label>
            <a href="#">Muhammad Areeb.pdf</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-primary pb-2">Applied Job</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
};

export default Profile;
