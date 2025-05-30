import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = ({userName}) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const data = await fetch("https://api.github.com/users/"+userName);
      const json = await data.json();
      console.log(json);
      setUserInfo(json);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  if (!userInfo) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="user-card">
      <h2 className="userInfo">Name: {userInfo.name}</h2>
      <h2 className="userInfo">Location: {userInfo.location}</h2>
      <h2 className="userInfo">Github Page: <Link to="https://github.com/AnveshRacharla">{userInfo.html_url}</Link></h2>
    </div>
  );
};

export default User;
