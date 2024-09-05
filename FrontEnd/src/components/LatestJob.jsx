import LatestJobCards from "./LatestJobCards";

const LatestJob = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-primary">
        Latest <span className="text-secondary">Jobs Openings</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 py-8">
        {cards.slice(0, 6).map((i) => (
          <LatestJobCards key={i} />
        ))}
      </div>
    </section>
  );
};

export default LatestJob;
