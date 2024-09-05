import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-sm shadow-md transition-all hover:bg-gray-50 hover:shadow-none">
      <h1 className="font-medium text-xl text-primary">Company Name</h1>
      <h4 className="text-gray-600 text-md">Pakistan</h4>
      <h2 className="text-secondary text-2xl font-bold">Job Tile</h2>
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
        molestias.
      </p>
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
    </div>
  );
};

export default LatestJobCards;
