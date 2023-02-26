import React, { useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout';



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
    <Layout>
      <h3>HomePage</h3>
    </Layout>
  );
}

export default HomePage;