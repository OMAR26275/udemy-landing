import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-search">
        <div className="logo">Udemy</div>
        <input
          type="text"
          placeholder="Search for anything"
          className="search-bar"
        />
      </div>
      <div className="header-actions">
        <span className="icon">🛒</span>
        <button className="signup-btn"> Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
