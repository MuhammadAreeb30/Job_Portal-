import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const JobCards = () => {
  return (
    <div className="shadow-md rounded-sm py-2 px-4 transition-all hover:shadow-none hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <p className="text-base">3 days</p>
        <Button className="rounded-full" variant="outline" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6 rounded-md" size="icon" variant="outline">
          <Avatar>
            <AvatarImage
              variant="outline"
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
            />
          </Avatar>
        </Button>
        <div className="flex flex-col">
          <h2 className="text-lg font-medium text-primary">Google</h2>
          <h4 className="text-sm">Pakistan</h4>
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-secondary font-bold text-lg">Title</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam
          repellat hic sequi ducimus!
        </p>
      </div>
      <div className="flex gap-2">
        <Badge className="text-sm text-secondary" variant="outline">
          12 Positions
        </Badge>
        <Badge className="text-sm text-red-600" variant="outline">
          Part Time
        </Badge>
        <Badge className="text-sm text-primary" variant="outline">
          25k
        </Badge>
      </div>
      <div className="flex gap-6 my-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-secondary text-white">Save</Button>
      </div>
    </div>
  );
};

export default JobCards;
