import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd';

const Header = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  //logout
  const logoutHandler = () => {
    localStorage.removeItem('user');
    message.warning("Logout Successfully!!");
    navigate("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Aj Expanse Manager</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item navbar-brand">
                {loginUser && loginUser.name}
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header