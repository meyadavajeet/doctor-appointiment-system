import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>

      <BrowserRouter>
        {
          loading ? <Spinner /> :
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } />
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                } />
            </Routes>
        }

      </BrowserRouter>
    </>
  );
}

export default App;
