import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    try {
      const getUserProfileInfo = async () => {
        const respons = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await respons.json();
        setUserInfo(data);
      };

      getUserProfileInfo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1 className="text-primary">UserProfil</h1>
      <h3>Name:{userInfo.username}</h3>
      <h6>Email:{userInfo.email}</h6>
    </div>
  );
};

export default UserProfile;
