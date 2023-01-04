import React, { useState } from "react";
import { TbNotebook, TbPlaylistAdd } from "react-icons/tb";
import { Link } from "react-router-dom";
import classNames from "classnames";
import AddCategory from "./AddCategory";

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
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

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
            <TbNotebook className="icon" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="home__nav__btn">
        <div
          onClick={() => {
            show();
          }}
          className="btn-add"
        >
          <TbPlaylistAdd className="icon" />
          <span>Add Category</span>
        </div>
      </div>
      <AddCategory visible={visible} hide={hide} />
    </div>
  );
};

export default Navbar;
