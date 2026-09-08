import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './design.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Local storage se details nikalna
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');
  const userNumber = localStorage.getItem('userNumber');

  // Naam ka pehla letter nikaal kar capital karna (Example: "Rahul" -> "R")
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function handleLogout() {
    localStorage.clear();
    setShowMenu(false);
    navigate('/login');
  }

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#00D7D0"/>
        </svg>
        <div className="logo-text-group">
          <span className="logo-main-text">FREEDO</span>
          <span className="logo-sub-text">RENTALS</span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Usss</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/revieww">Reviews</Link>
        
        <li>
          <button className="subscription-btn">Subscription</button>
        </li>
      </ul>

      {/* Profile & Dropdown Section */}
      <div className="profile-container">
        {/* Profile Icon button */}
        <button className="sign-in-btn" onClick={toggleMenu}>👤</button>

        {showMenu && (
          <div className="profile-dropdown">
            {isLoggedIn ? (
              <div className="user-details-box">
                {/* Round Avatar Circle jisme first letter aayega */}
                <div className="avatar-circle">
                  {firstLetter}
                </div>

                <p className="user-name">{userName}</p>
                <p className="user-info">📧 {userEmail}</p>
                <p className="user-info">📞 {userNumber}</p>
                <hr />
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
                <Link to="/register" onClick={toggleMenu}>Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export { Navbar };