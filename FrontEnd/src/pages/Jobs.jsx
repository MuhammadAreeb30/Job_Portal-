import FilterCard from "@/components/FilterCard";
import Footer from "@/components/Footer";
import JobCards from "@/components/JobCards";
import Navbar from "@/components/ui/shared/Navbar";

const Jobs = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {jobs.length < 0 ? (
        <div className="bg-gray-100 h-[100vh]">
          <Navbar />
          <div className="w-full h-[91vh] flex items-center justify-center">
            <h1>Jobs Not Found</h1>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <section className="max-w-7xl mx-auto py-6 flex gap-4">
            <div className="w-1/5">
              <FilterCard />
            </div>
            <div className="w-4/5">
              <div className="grid grid-cols-3 gap-4">
                {jobs.map((item, i) => (
                  <JobCards item={item} key={i} />
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Jobs;
