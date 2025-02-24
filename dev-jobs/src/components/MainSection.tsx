import JobCard from "./JobCard";
import data from "../data.json"; // Import JSON file

const MainSection: React.FC = () => {
  return (
    // <div className="h-200 border-1 border-amber-300 ml-35 mr-35 grid grid-cols-3 gap-x-4 justify-between">
    //   {/* <div className="border-1 border-green-700 bg-[#FFFFFF] h-50 mt-20 w-100"></div> */}
    //   <div className="grid grid-cols-3 justify-center gap-6 p-8 h-100 w-100">
    //     {data.map((item, id) => (
    //       <JobCard
    //         key={id}
    //         id={id}
    //         company={item.company}
    //         logo={item.logo}
    //         logoBackground={item.logoBackground}
    //         position={item.position}
    //         postedAt={item.postedAt}
    //         contract={item.contract}
    //         location={item.location}
    //       />
    //     ))}
    //   </div>
    //   {/* <JobCard/> */}
    // </div>
    <div className=" grid grid-cols-3 mx-35 gap-10">
      {data.map((item, id) => (
        <div className="my-4">
          <JobCard
            key={id}
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
