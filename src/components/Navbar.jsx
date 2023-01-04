import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import classNames from "classnames";


const _nav = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Test",
    link: "/test",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("/");

  return (
    <div className="home__nav">
      <div className="home__nav__header">
        <span>Note</span>
      </div>
      <div className="home__nav__subnav">
        {_nav.map((item, index) => (
          <Link
            key={index}
            onClick={() => setActive(item.link)}
            to={item.link}
            className={classNames(
              "home__nav__subnav__item",
              active === item.link && "active"
            )}
          >
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="home__nav__btn">
        <div
          onClick={() => {
            // handleLogout();
          }}
          className="btn-add"
        >
          <HiOutlinePlusSm className="icon" />
          <span>Add Category</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
