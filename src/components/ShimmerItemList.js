const ShimmerItemList=()=>{
    return(
        <div>
        <div className="flex flex-wrap justify-center">
            <div className="w-50 mt-4 h-10 rounded-lg bg-neutral-300 transition-transform duration-200 ease-in-out animate-pulse"></div>
        </div> 
        <div className="flex flex-wrap justify-center">
            <div className="w-100 mt-4 h-7 rounded-lg bg-neutral-300 transition-transform duration-200 ease-in-out animate-pulse"></div>
        </div>
        <div className="flex flex-wrap justify-center">
            <div className="w-7/12 mt-4 h-100 rounded-lg bg-neutral-300 transition-transform duration-200 ease-in-out animate-pulse"></div>
        </div>

        </div>
    )
}
export default ShimmerItemList;