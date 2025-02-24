const TopSection: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] h-20 ml-35 mr-35 grid grid-cols-3 absolute top-25">
      <div className="h-10 mt-5 flex space-x-2">
        <img
          src="../src/assets/desktop/icon-search.svg"
          alt="search icon"
          className="ml-3 mt-2"
        />
        <input
          type="text"
          placeholder="Filter by company,....."
          className="mt-2 mb-2 mr-2 pl-2 h-8 w-90 pr-2"
        />
      </div>
      <div className="h-10 mt-5 flex space-x-2">
        <img
          src="../src/assets/desktop/icon-location.svg"
          alt="location icon"
          className="ml-3 mt-1"
        />
        <input
          type="text"
          placeholder="Filter by location,....."
          className="mt-1 mr-2 pl-2 h-8 w-90 pr-2"
        />
      </div>
      <div className="h-10 mt-5 grid grid-cols-2">
        <div className="flex space-x-4 ">
          <input
            type="checkbox"
            className="w-4 h-4 ml-5 mt-3.5 checked:bg-blue-600 checked:border-blue-600"
            id="job-type"
          />
          <label htmlFor="job-type" className="mt-2.5 mb-3.0">
            Full Time
          </label>
        </div>
        <button className="bg-[#5964E0] w-30 h-10 ml-5 px-4 py-2 text-[#FFFFFF] rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};
export default TopSection;
