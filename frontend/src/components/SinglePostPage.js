import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

function SinglePostPage() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/post/${id}`)
      .then((result) => {
        setPost(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <article>
      <div className="container">
        {loading ? (
          "Please wait..."
        ) : (
          <div className="article">
            <div className="PostTitleGroup">
              <h2 className="PostTitle">{post.title}</h2>
              {modalOpen && <Modal setModalOpen={setModalOpen} id={id} />}
              <div className="icons">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => setModalOpen(true)}
                />
                <Link to={`/post/edit/${post._id}`}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
            </div>
            <div className="postDate">
              <p>Posted at :</p>
              <p className="date">{post.createdAt.toString().slice(0, 10)}</p>
              <p className="time">{post.createdAt.toString().slice(11, 16)}</p>
            </div>
            <p className="PostBody">{post.body}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default SinglePostPage;
