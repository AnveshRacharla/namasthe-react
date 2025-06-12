import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = ({ userName }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await fetch("https://api.github.com/users/" + userName);
      const json = await data.json();
      setUserInfo(json);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  if (!userInfo) {
    return (
      <div className="py-5 px-4 border-2 rounded-2xl bg-neutral-100">
        <h2 className="m-2 font-semibold h-6 rounded-lg animate-pulse w-5/12 bg-neutral-300"></h2>
        <h2 className="m-2 font-semibold h-6 rounded-lg animate-pulse w-4/12 bg-neutral-300"></h2>
        <h2 className="m-2 font-semibold h-6 rounded-lg animate-pulse w-8/12 bg-neutral-300"></h2>
      </div>
    );
  }

  return (
    <div>
      <div className="py-5 px-4 border-2 rounded-2xl bg-neutral-100">
        <h2 className="p-1 font-semibold">Name: {userInfo.name}</h2>
        <h2 className="p-1 font-semibold">Location: {userInfo.location}</h2>
        <h2 className="p-1 font-semibold">
          Github Page:{" "}
          <Link to="https://github.com/AnveshRacharla">
            {userInfo.html_url}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default User;
