import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [userData, setUserData] = useState({
    fullName: user?.fullName,
    email: user?.email,
    phone: user?.phone,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.join(","),
    resume: user?.profile?.resume,
    profilePicture: user?.profile?.profilePicture,
  });
  const dispatch = useDispatch();

  const changeEvent = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const fileEvent = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(userData)
    const formData = new FormData();
    formData.append("userId", user?.id);
    formData.append("fullName", userData.fullName);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("bio", userData.bio);
    formData.append("skills", userData.skills.split(",").join(" "));
    if (userData.resume) {
      formData.append("resume", userData.resume);
    }
    if (userData.profilePicture) {
      formData.append("profilePicture", userData.profilePicture);
    }
    try {
      console.log(formData);

      const response = await axios.post(
        `${import.meta.env.VITE_USER_URI}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data.success === true) {
        setLoading(false);
        console.log(response.data);
        dispatch(response.data)
        setOpen(false);
        toast.success("Profile updated successfully!");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-[425px]"
         
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <Input
              type="text"
              name="fullName"
              value={userData.fullName}
              placeholder="Name"
              className="w-full p-2 mb-4"
              onChange={changeEvent}
            />
            <Input
              type="email"
              name="email"
              value={userData.email}
              placeholder="Email"
              onChange={changeEvent}
              className="w-full p-2 mb-4"
            />
            <Input
              type="number"
              name="phone"
              value={userData.phone}
              placeholder="Number"
              onChange={changeEvent}
              className="w-full p-2 mb-4"
            />
            <Input
              type="text"
              name="bio"
              onChange={changeEvent}
              value={userData ? userData.bio : ""}
              placeholder="Bio"
              className="w-full p-2 mb-4"
            />
            <Input
              type="text"
              name="skills"
              value={userData ? userData.skills : ""}
              placeholder="Skills"
              onChange={changeEvent}
              className="w-full p-2 mb-4"
            />
            <div className="flex flex-col gap-2 text-primary text-md">
              <Label htmlFor="profilePicture">Profile Picture</Label>
              <Input type="file" name="profilePicture" id="profilePicture" onChange={fileEvent} />
            </div>
            <div className="flex flex-col gap-2 text-primary text-md">
              <Label htmlFor="resume">Resume</Label>
              <Input
                type="file"
                id="resume"
                name="resume"
                accept="application/pdf"
                onChange={fileEvent}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" />
                      Update Profile
                    </span>
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateProfileDialog;
