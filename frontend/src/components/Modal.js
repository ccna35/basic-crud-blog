import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Modal({ setModalOpen, id }) {
  let navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/post/${id}`)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err.message);
      });
    navigate("/");
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="modalCloseBtn" onClick={() => setModalOpen(false)}>
          X
        </button>
        <h2>Are you sure you want to delete this post?</h2>
        <div className="modalBtns">
          <button onClick={() => setModalOpen(false)}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
