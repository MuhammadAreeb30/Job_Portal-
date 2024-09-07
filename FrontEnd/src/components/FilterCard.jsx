import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const FilterCard = () => {
  const filterData = [
    {
      jobType: "Location",
      options: ["Remote", "Karachi", "Lahore", "Islamabad"],
    },
    {
      jobType: "Industry",
      options: [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
      ],
    },
    {
      jobType: "Salary",
      options: ["0 - 20k", "20k - 60k", "60k - 200k"],
    },
  ];

  return (
    <div className="shadow-lg rounded-md py-4 px-4">
      <h1 className="text-lg text-primary font-semibold">Job Filter</h1>
      {filterData.map((item, index) => (
        <div key={index}>
          <h1 className="my-3 text-md text-primary font-semibold">
            {item.jobType}
          </h1>
          {item.options.map((item, index) => {
            return (
              <div key={index}>
                <RadioGroup className="flex items-center gap-3 pt-1">
                  <RadioGroupItem value={item} className="mt-[2px]" />
                  <Label className="text-sm text-gray-700">{item}</Label>
                </RadioGroup>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;
