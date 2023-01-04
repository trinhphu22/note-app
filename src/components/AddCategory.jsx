import React from "react";

import Modal from "../helper/Modal";

const AddCategory = ({ visible, hide }) => {
  return (
    <Modal height={250} width={400} visible={visible} hide={hide}>
      <div className="modal">
        <div className="modal__header">
          <span>Add Category</span>
        </div>
        <div className="modal__body">
          <div className="modal__body__input">
            <input type="text" placeholder="Category Name" />
          </div>
        </div>
        <div className="modal__footer">
          <div onClick={hide} className="modal__footer__btn">
            <button className="cancel">Cancel</button>
          </div>
          <div className="modal__footer__btn">
            <button className="save">Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCategory;
