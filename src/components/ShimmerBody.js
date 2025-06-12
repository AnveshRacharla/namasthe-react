const Shimmer = () => (
  <div className="">
    <div className="flex flex-wrap justify-center mb-4 mt-6">
      <div className="m-1">
        <input
          type="text"
          className="px-3 py-1 pr-50 border border-black rounded-sm"
          placeholder="Search restaurants/food"
        />
      </div>
      <button className="px-3  m-1 ml-3 rounded-sm cursor-pointer bg-neutral-300 hover:scale-[1.05] transition-transform duration-200 ease-in-out">
        Top Rated Restaurants
      </button>
      {/* <div className="m-1">
          UserName:
          <input
              type="text"
              className="ml-1 px-3 py-1 border-1 rounded-sm border-b-black"
              placeholder="User Name"
          />
      </div> */}
    </div>

    <div className="flex flex-wrap justify-center">
      {Array(20).fill("").map((_, index) => (
        <div
          key={index}
          className="m-2 p-2 w-58 h-100 bg-neutral-200 rounded-2xl border transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-md cursor-pointer box-border animate-pulse"
        >
          <div className="w-54 h-50 bg-gray-400 rounded-2xl mb-2"></div>
          <div className="space-y-2 p-3">
            <div className="h-4 my-1 justify-center bg-gray-400 rounded w-3/4"></div>
            <div className="h-3 my-4 bg-gray-400 rounded w-full"></div>
            <div className="h-3 my-4 bg-gray-400 rounded w-5/6"></div>
            <div className="h-3 my-4 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Shimmer;
