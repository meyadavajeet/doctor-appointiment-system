import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/AlertSlice';
import { setUser } from '../redux/features/UserSlice';

export default function ProtectedRoute({ children }) {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  //get user information
  //eslint-disable-next-line
  const getUserInformation = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/v1/users/get-user-data",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        dispatch(setUser(response.data.data))
      } else {
        localStorage.clear();
        <Navigate to="/login" />
      }
    } catch (error) {
      localStorage.clear();
      dispatch(hideLoading());
      console.log(error);
    }
  }

  //useEffect
  useEffect(() => {
    if (!user) {
      getUserInformation();
    }
  }, [user, getUserInformation])

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};