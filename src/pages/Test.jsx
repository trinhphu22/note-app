import React, { useState } from "react";
import classNames from "classnames";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BiEdit, BiTrash } from "react-icons/bi";

const Test = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="home__main__body">
      <div className="home__main__body__title">
        <span>Category</span>
      </div>
      <div className={classNames("home__main__body__search", "dashboard")}>
        <input className="search" type="text" placeholder="Search by title" />
        <div
          onClick={() => {
            // toggleDrawer();
            // setProduct(null);
          }}
          className="button"
        >
          <HiOutlinePlusSm className="icon" />
          <span>Add Category</span>
        </div>
      </div>
      <div className="home__main__body__list">
        <div className="table">
          <div className="table__header">
            <div className="table__header__item">title</div>
            <div className="table__header__item">description</div>
            <div className="table__header__item flex-action">ACTIONS</div>
          </div>
          <div
            className={classNames("table__body", hover && "item-hover")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="table__body__item">123</div>
            <div className="table__body__item">123</div>
            <div className="table__body__item flex-action">
              <BiEdit
                // onClick={() => {
                //   toggleDrawer();
                //   setProduct(item);
                // }}
                className="edit"
              />
              <BiTrash
                // onClick={() => {
                //   show();
                //   setProduct(item);
                // }}
                className="delete"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
