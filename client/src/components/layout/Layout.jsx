import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Badge, message } from 'antd';
import Footer from './Footer';
import Header from './Header'
import './layout.css';
import { adminMenu, userMenu } from '../../Data/data';

const Layout = ({ children }) => {

  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();


  //logout functionalities
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Success");
    navigate("/login");
  }

  // rendering menu list
  const sidebarMenuList = user?.isAdmin ? adminMenu : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Aj Coder</h6>
              <hr />
            </div>
            <div className="menu">
              {
                sidebarMenuList.map((menu) => {
                  const isActive = location.pathname === menu.path;
                  return (
                    <>
                      <div className={`menu-item ${isActive && "active"}`}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                      </div>
                    </>
                  );
                })
              }
              <div className={`menu-item`} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          {/* <Header /> */}
          <div className="header">
            <div className="header-content">
              <Badge count={user && user.notification.length}>
                <i className="fa-solid fa-bell text-light"></i>
              </Badge>
              <Link to="/profile">{user?.name}</Link>
            </div>
          </div>
          <div className='body'>
            {children}
          </div>
        </div>
        <Footer />
      </div>

    </>
  )
}

export default Layout