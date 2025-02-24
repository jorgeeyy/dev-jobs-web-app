const NavBar: React.FC = () => {
  return (
    <div className="bg-[url(../src/assets/desktop/bg-pattern-header.svg)] bg-cover bg-no-repeat rounded-bl-[70px] h-30 ml-5 grid grid-cols-3 pt-10">
      <div className="border-1 border-yellow-500 ml-30 h-10 w-50">
        <p>dev jobs</p>
      </div>
      <br />
      <div className="border-2 border-red-500 mr-35 h-10">
        {/* <p className="flex justify-end mr-3">toggle div</p>
                <p className="flex justify-end mr-3">toggle div</p>
                <p className="flex justify-end mr-3">toggle div</p> */}
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="switch" type="checkbox" className="peer sr-only" />
          {/* <label for="switch" className="hidden"></label> */}
          <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
