import JobCard from "./JobCard";
import data from "../data.json"; // Import JSON file

const MainSection: React.FC = () => {
  return (
    <div className=" grid grid-cols-3 mx-35 gap-10">
      {data.map((item, id) => (
        <div className="my-4">
          <JobCard
            // key={id}
            id={id}
            company={item.company}
            logo={item.logo}
            logoBackground={item.logoBackground}
            position={item.position}
            postedAt={item.postedAt}
            contract={item.contract}
            location={item.location}
          />
        </div>
      ))}
    </div>
  );
};
export default MainSection;
