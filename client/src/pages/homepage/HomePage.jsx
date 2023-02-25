import React, { useEffect } from 'react';
import axios from 'axios';


const HomePage = () => {
  // get login user data
  const getUserData = async () => {
    try {
      const result = await axios.post("/api/v1/users/get-user-data", {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h3>HomePage</h3>
    </>
  );
}

export default HomePage;