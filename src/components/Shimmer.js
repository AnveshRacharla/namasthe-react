const Shimmer = () => (
    <div>
        <div className="search">
                <input type="text" className="search-box" />
                <button className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="shimmer-container">
            {Array(16).fill("").map((_, index) => (
                <h1 key={index} className="shimmer-card"></h1>
            ))}
        </div>
    </div>
);

export default Shimmer;
