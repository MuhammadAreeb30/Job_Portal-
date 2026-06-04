import Footer from "./Footer";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./ui/shared/Navbar";

const JobDetail = () => {
  const applied = false;
  return (
    <>
      <Navbar />
      <div className="max-w-7xl h-[85vh] mx-auto py-6">
        <h1 className="text-center text-primary font-bold text-3xl">
          Job Detail
        </h1>
        <div className="pt-4 pb-2 border-b-4 border-gray-300 flex justify-between">
          <div>
            <h2 className="font-semibold text-secondary text-xl">
              Front End Developer
            </h2>
            <div className="pt-4 flex gap-2">
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
            <p className="text-lg font-medium text-primary pt-4">Description</p>
          </div>
          <Button>{applied ? "Applied" : "Apply Now"}</Button>
        </div>
        <div className="pt-6">
          <h1 className="font-semibold text-primary my-1">
            Role:{" "}
            <span className="text-gray-800 font-normal pl-4">
              Front End Developer
            </span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Location:{" "}
            <span className="text-gray-800 font-normal pl-4">Pakistan</span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Description:{" "}
            <span className="text-gray-800 font-normal pl-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia id
              ducimus labore, repellendus fugiat non.
            </span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Experience:{" "}
            <span className="text-gray-800 font-normal pl-4">2years</span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Salary: <span className="text-gray-800 font-normal pl-4">100k</span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Total Applicant:{" "}
            <span className="text-gray-800 font-normal pl-4">5</span>
          </h1>
          <h1 className="font-semibold text-primary my-1">
            Date Posted:{" "}
            <span className="text-gray-800 font-normal pl-4">12:03:2024</span>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetail;
