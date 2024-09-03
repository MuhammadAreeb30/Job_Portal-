import { Search } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 w-full h-[60vh] ">
      <div className="max-w-7xl h-full mx-auto flex flex-col gap-4 justify-center items-center">
        <span className="bg-secondary px-4 py-2 rounded-full text-white font-medium">
          Welcome to No. 1 Job Nest Website
        </span>
        <h1 className="text-6xl font-semibold text-center">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-secondary font-bold">Dream Jobs</span>
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          reiciendis amet ea laudantium omnis.
        </p>
        <div className="w-[30rem] flex items-center justify-between rounded-full bg-gray-100 shadow-md">
          <input
            type="text"
            placeholder="Find your dream jobs"
            className="w-full outline-none bg-transparent pl-4 placeholder:text-gray-700"
          />
          <Button className="bg-secondary rounded-full p-6">
            <Search />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
