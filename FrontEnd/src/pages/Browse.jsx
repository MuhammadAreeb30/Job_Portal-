import Footer from "@/components/Footer";
import JobCards from "@/components/JobCards";
import Navbar from "@/components/ui/shared/Navbar";

const Browse = () => {
  const jobs = [1, 2, 3];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-6 h-[85vh]">
        <h1 className="p-2 font-medium text-primary">
          Search Results {jobs.length}
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {jobs.map((job) => {
            return <JobCards key={job} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
